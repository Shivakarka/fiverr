import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { PulseLoader } from "react-spinners";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let cat = queryParams.get("cat");

  if (cat && cat.includes("-")) {
    cat = cat.replace(/-/g, " & ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  // console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort, cat, search]);

  const apply = () => {
    refetch();
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          <div>
            <Link to="/">
              <img
                className="home-icon"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/home-breadcrumb.2ba1681.svg"
                alt="Fiverr"
              />
            </Link>{" "}
          </div>
          <div>/ {cat} &gt;</div>
        </span>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
              <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            </span>

            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {!data?.length && !isLoading && !error && (
            <h1 style={{ height: "50vh", margin: "3rem auto" }}>
              No gigs found!
            </h1>
          )}
          {isLoading ? (
            <PulseLoader loading={isLoading} color="#1dbf73" />
          ) : error ? (
            <h1>Something went wrong!</h1>
          ) : (
            data.map((gig) => <GigCard key={gig._id} item={gig} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
