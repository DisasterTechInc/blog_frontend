import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { graphql, Link } from "gatsby";
import { Layout } from "components/Layout";
import { Section } from "components/Section";
import { Breadcrumb } from "components/Breadcrumb";
import { Pagination } from "../components/Pagination";
import IconSearch from "assets/images/icon__search.svg";
import Placeholder from "assets/images/graphics__blog-page__placeholder.svg";
import { AppCheckbox } from "../components/AppCheckbox";
import { AppSelect } from "../components/AppSelect";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
import BlogPlaceholder from "assets/images/graphics__no-blog.svg";
import { useForm, Controller } from "react-hook-form";

export default function Blog({ data }) {
  const {
    handleSubmit,
    control,
    getFieldState,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const allWpPost = data?.allWpPost?.nodes;

  const [posts, setPosts] = useState(data?.allWpPost?.nodes);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [currentPosts, setCurrentPosts] = useState(null);

  const [newsletterOptions, setNewsletterOptions] = useState({
    newsletter: false,
    blogPosts: false,
    productUpdates: false,
  });

  const blogSectionRef = useRef(null);

  const [favPosts, setFavPosts] = useState([]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem("favorites") !== null
    ) {
      const favorites = sessionStorage.getItem("favorites");
      const filteredFavorites = JSON.parse(favorites);
      setFavPosts(filteredFavorites);
    }
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    blogSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const paginatePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage((currentValue) => currentValue - 1);
  };

  const paginateNext = () => {
    if (currentPage === posts.length / postsPerPage) return;
    setCurrentPage((currentValue) => currentValue + 1);
  };

  const postCategories = allWpPost.map((i) => i?.categories?.nodes[0]?.name);
  const filteredCategories = [...new Set(postCategories)];
  const options = filteredCategories.map((i) => ({ value: i, label: i }));

  const handleCategoryFilter = (e) => {
    if (!e) {
      setSelectedCategory("");
      setPosts(data?.allWpPost?.nodes);
      setSearchTerm("");
      return;
    }
    const filteredPosts = allWpPost.filter(
      (i) => i?.categories?.nodes[0]?.name === e.value
    );
    setSearchTerm("");
    setSelectedCategory(e);
    setCurrentPage(1);
    setPosts(filteredPosts);
  };

  const handleSearchFilter = (searchTerm) => {
    let filteredPosts = [];
    if (!!selectedCategory && !searchTerm) {
      const postsByCategory = allWpPost.filter(
        (i) => i?.categories?.nodes[0]?.name === selectedCategory?.value
      );
      setCurrentPage(1);
      setPosts(postsByCategory);
      return;
    }
    if (!selectedCategory && !searchTerm) {
      const postsByCategory = allWpPost;
      setCurrentPage(1);
      setPosts(postsByCategory);
      return;
    }
    filteredPosts = posts.filter((i) => {
      const { title, content } = i;
      return (
        content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setCurrentPage(1);
    setPosts(filteredPosts);
  };

  useEffect(() => {
    handleSearchFilter(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!selectedCategory && !searchTerm) {
      setCurrentPosts(allWpPost.slice(indexOfFirstPost, indexOfLastPost));
    } else {
      setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
    }
  }, [indexOfLastPost, indexOfFirstPost, selectedCategory, searchTerm, posts]);

  const handlerFavoritePost = (id) => {
    let ids = [...favPosts];

    if (favPosts && favPosts?.length && favPosts.includes(id)) {
      ids = ids.filter((i) => i !== id);
    } else {
      ids.push(id);
    }

    setFavPosts(ids);
    sessionStorage.setItem("favorites", JSON.stringify(ids));
  };

  const truncate = (str, amount) => {
    return str.length > amount ? str.substring(0, amount - 3) + "..." : str;
  };

  const handleSubscriptionOptions = (label, value) => {
    setNewsletterOptions({ ...newsletterOptions, [label]: value });
  };

  const onSubmit = async (data) => {
    console.log("form data", data);
  };

  return (
    <Layout name="blog">
      <Breadcrumb>
        <li className="active">Blog</li>
      </Breadcrumb>
      <main className="site-main">
        <Section sectionClass="pt-0">
          <div
            className="d-xl-flex align-items-center mb-3 mb-md-5"
            ref={blogSectionRef}
          >
            <h1 className="m-0 mb-3 mb-md-0">Disaster Tech Blog</h1>
            <div className="d-flex align-items-center ms-auto">
              <div className="d-flex align-items-center">
                <span
                  onClick={() => setView("list")}
                  className="cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.85">
                      <path
                        d="M4 6H6V8H4V6ZM4 11H6V13H4V11ZM4 16H6V18H4V16ZM20 8V6H18.8H9.2H8.023V8H9.2H18.8H20ZM8 11H20V13H8V11ZM8 16H20V18H8V16Z"
                        fill={view === "list" ? "#6366F1" : "#ffffff"}
                      />
                    </g>
                  </svg>
                </span>
                <span
                  onClick={() => setView("grid")}
                  className="cursor-pointer ms-2"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3H4C3.448 3 3 3.448 3 4V10C3 10.552 3.448 11 4 11H10C10.552 11 11 10.552 11 10V4C11 3.448 10.552 3 10 3ZM9 9H5V5H9V9ZM14 11H20C20.553 11 21 10.552 21 10V4C21 3.448 20.553 3 20 3H14C13.447 3 13 3.448 13 4V10C13 10.552 13.447 11 14 11ZM15 5H19V9H15V5ZM3 20C3 20.552 3.448 21 4 21H10C10.552 21 11 20.552 11 20V14C11 13.448 10.552 13 10 13H4C3.448 13 3 13.448 3 14V20ZM5 15H9V19H5V15ZM13 20C13 20.552 13.447 21 14 21H20C20.553 21 21 20.552 21 20V14C21 13.448 20.553 13 20 13H14C13.447 13 13 13.448 13 14V20ZM15 15H19V19H15V15Z"
                      fill={view === "grid" ? "#6366F1" : "#ffffff"}
                    />
                  </svg>
                </span>
              </div>
              <AppSelect
                className="form-selectbox flex-shrink-0 ms-auto ms-xl-4"
                classNamePrefix="react-select"
                value={selectedCategory}
                onChange={(e) => handleCategoryFilter(e)}
                options={options}
                placeholder="Select a Category"
                isSearchable={false}
                isClearable={true}
                noOptionsMessage={"No Categories Found"}
              />
            </div>
            <div className="form-search ms-xl-4 mt-3 mt-xl-0 w-100 w-xl-auto">
              <AppInput
                className="md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search the blog..."
              />
              <span className="icon">
                <img src={IconSearch} alt="" />
              </span>
            </div>
          </div>
          {currentPosts && !!currentPosts?.length ? (
            <>
              <div className="row">
                {view === "grid" ? (
                  <>
                    {currentPosts?.map((post) => {
                      return (
                        <div className="col-md-6 col-xl-4" key={post?.id}>
                          <div className="blog__list grid">
                            <div className="blog__pic position-relative">
                              {(post?.featuredImage?.node?.sourceUrl && (
                                <div
                                  className="blog__pic--content"
                                  style={{
                                    backgroundImage: `url(
                          ${post?.featuredImage?.node?.sourceUrl}
                        )`,
                                  }}
                                ></div>
                              )) || (
                                <div className="blog__pic--placeholder">
                                  <img src={Placeholder} alt="" />
                                </div>
                              )}
                              <Link
                                to={`/blog/${post?.slug}`}
                                className="stretched-link"
                              ></Link>
                              <span
                                className="blog__favorite"
                                onClick={() => handlerFavoritePost(post?.id)}
                              >
                                {(favPosts?.includes(post?.id) && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <path
                                      d="M13.5 1.5H4.5C3.67275 1.5 3 2.17275 3 3V6.957V7.5V16.5L9 13.071L15 16.5V7.5V6.957V3C15 2.17275 14.3273 1.5 13.5 1.5Z"
                                      fill="url(#paint0_linear_509_3674)"
                                    />
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear_509_3674"
                                        x1="9.00001"
                                        y1="-3.5"
                                        x2="9.00001"
                                        y2="15"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stopColor="#6366F1" />
                                        <stop
                                          offset="0.5"
                                          stopColor="#8B5CF6"
                                        />
                                        <stop offset="1" stopColor="#D946EF" />
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                )) || (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <path
                                      d="M13.5 1.5H4.5C3.67275 1.5 3 2.17275 3 3V6.957V7.5V16.5L9 13.071L15 16.5V7.5V6.957V3C15 2.17275 14.3273 1.5 13.5 1.5ZM13.5 13.9147L9 11.3438L4.5 13.9147V7.5V6.957V3H13.5V6.957V7.5V13.9147Z"
                                      fill="#33354D"
                                    />
                                  </svg>
                                )}
                              </span>
                            </div>
                            <div className="blog__content">
                              <div className="d-flex align-items-center mb-3 flex-shrink-0">
                                <span className="blog__category">
                                  {post?.categories?.nodes[0]?.name}
                                </span>
                                <span className="blog__date">{post?.date}</span>
                              </div>
                              <h5 className="flex-grow-1 m-0">
                                <Link to={`/blog/${post?.slug}`}>
                                  {post?.title}
                                </Link>
                              </h5>
                              <hr className="flex-shrink-0" />
                              <div className="d-flex align-items-center flex-shrink-0">
                                <span className="blog__avatar">
                                  {(post?.author?.node?.avatar?.url && (
                                    <img
                                      src={post?.author?.node?.avatar?.url}
                                      alt=""
                                    />
                                  )) ||
                                    null}
                                </span>
                                <h6 className="m-0 ms-3">
                                  {post?.author?.node?.name}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {currentPosts?.map((post) => {
                      return (
                        <div className="col-md-12" key={post?.id}>
                          <div className="blog__list list">
                            <div className="blog__pic position-relative">
                              {(post?.featuredImage?.node?.sourceUrl && (
                                <div
                                  className="blog__pic--content"
                                  style={{
                                    backgroundImage: `url(
                          ${post?.featuredImage?.node?.sourceUrl}
                        )`,
                                  }}
                                ></div>
                              )) || (
                                <div className="blog__pic--placeholder">
                                  <img src={Placeholder} alt="" />
                                </div>
                              )}
                              <Link
                                to={`/blog/${post?.slug}`}
                                className="stretched-link"
                              ></Link>
                              <span
                                className="blog__favorite"
                                onClick={() => handlerFavoritePost(post?.id)}
                              >
                                {(favPosts?.includes(post?.id) && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <path
                                      d="M13.5 1.5H4.5C3.67275 1.5 3 2.17275 3 3V6.957V7.5V16.5L9 13.071L15 16.5V7.5V6.957V3C15 2.17275 14.3273 1.5 13.5 1.5Z"
                                      fill="url(#paint0_linear_509_3674)"
                                    />
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear_509_3674"
                                        x1="9.00001"
                                        y1="-3.5"
                                        x2="9.00001"
                                        y2="15"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stopColor="#6366F1" />
                                        <stop
                                          offset="0.5"
                                          stopColor="#8B5CF6"
                                        />
                                        <stop offset="1" stopColor="#D946EF" />
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                )) || (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <path
                                      d="M13.5 1.5H4.5C3.67275 1.5 3 2.17275 3 3V6.957V7.5V16.5L9 13.071L15 16.5V7.5V6.957V3C15 2.17275 14.3273 1.5 13.5 1.5ZM13.5 13.9147L9 11.3438L4.5 13.9147V7.5V6.957V3H13.5V6.957V7.5V13.9147Z"
                                      fill="#33354D"
                                    />
                                  </svg>
                                )}
                              </span>
                            </div>
                            <div className="blog__content">
                              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mb-3 flex-shrink-0">
                                <span className="blog__category">
                                  {post?.categories?.nodes[0]?.name}
                                </span>
                                <span className="blog__date">{post?.date}</span>
                              </div>
                              <h5 className="flex-grow-1 mb-3">
                                <Link to={`/blog/${post?.slug}`}>
                                  {post?.title}
                                </Link>
                              </h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: `${truncate(post?.excerpt, 250)}`,
                                }}
                                className="m-0"
                              />
                              <hr className="flex-shrink-0 mt-0 mt-md-2" />
                              <div className="d-flex align-items-center flex-shrink-0">
                                <span className="blog__avatar">
                                  {(post?.author?.node?.avatar?.url && (
                                    <img
                                      src={post?.author?.node?.avatar?.url}
                                      alt=""
                                    />
                                  )) ||
                                    null}
                                </span>
                                <h6 className="m-0 ms-3">
                                  {post?.author?.node?.name}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </>
          ) : (
            <div className="d-flex flex-column align-items-center py-5 text-center">
              <img className="img-fluid mb-4" src={BlogPlaceholder} alt="" />
              <h2 className="mb-3">No blog Found!</h2>
              <p className="m-0 text-xl">
                The blog you are looking for is not available.
              </p>
            </div>
          )}
          {(currentPosts && !!currentPosts?.length && (
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              currentPage={currentPage}
              paginate={paginate}
              paginatePrev={paginatePrev}
              paginateNext={paginateNext}
            />
          )) ||
            null}
        </Section>
        <Section sectionClass="section__subscribe lrg">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <h1 className="mb-4 mb-md-5">Don't Want to Miss Anything?</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-column flex-md-row align-items-md-center">
                  <h5 className="m-0">Sign up for Newsletters</h5>
                  <Controller
                    control={control}
                    name="newsletter"
                    rules={{
                      required: false,
                    }}
                    defaultValue={false}
                    render={({ field: { onChange, value } }) => (
                      <AppCheckbox
                        id={"newsletter"}
                        checked={value}
                        onClick={(e) => onChange(e)}
                        label={"Newsletter"}
                        className={"ms-md-5 mt-3 mt-md-0 flex-shrink-0"}
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name="blogPosts"
                    rules={{
                      required: false,
                    }}
                    defaultValue={false}
                    render={({ field: { onChange, value } }) => (
                      <AppCheckbox
                        id={"blogPosts"}
                        checked={value}
                        onClick={(e) => onChange(e)}
                        label={"Blog Posts"}
                        className={"ms-md-5 mt-3 mt-md-0 flex-shrink-0"}
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name="productUpdates"
                    rules={{
                      required: false,
                    }}
                    defaultValue={false}
                    render={({ field: { onChange, value } }) => (
                      <AppCheckbox
                        id={"productUpdates"}
                        checked={value}
                        onClick={(e) => onChange(e)}
                        label={"Product Updates"}
                        className={"ms-md-5 mt-3 mt-md-0 flex-shrink-0"}
                      />
                    )}
                  />
                </div>
                <div className="d-flex align-items-center mt-4 mt-md-5">
                  <Controller
                    control={control}
                    name="email"
                    rules={{
                      required: true,
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    }}
                    render={({ field: { onChange, value } }) => (
                      <AppInput
                        className={`md flex-grow-1 ${
                          errors?.email?.type === "required" ||
                          errors?.email?.type === "pattern"
                            ? "error"
                            : !!watch("email") &&
                              !errors?.email &&
                              !getFieldState("email")?.invalid
                            ? "success"
                            : ""
                        }`}
                        type="text"
                        onChange={onChange}
                        value={value}
                        placeholder={"Your Email"}
                      />
                    )}
                  />

                  <AppButton
                    type={"submit"}
                    className="md primary flex-shrink-0 ms-3"
                  >
                    Subscribe *
                  </AppButton>
                </div>
                {errors?.email?.type === "required" && (
                  <span className="form-status error">
                    This field is required
                  </span>
                )}
                {errors?.email?.type === "pattern" && (
                  <span className="form-status error">
                    Please provide a valid email
                  </span>
                )}
                {!!watch("email") &&
                  !errors?.email &&
                  !getFieldState("email")?.invalid && (
                    <span className="form-status success">Looks good!</span>
                  )}
              </form>
              <span className="text-s note mt-3">
                * Yes, I agree to the <Link to="/terms">terms</Link> and{" "}
                <Link to="/privacy-policy">privacy policy</Link>.
              </span>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query blogPageQuery {
    allWpPost(sort: { date: DESC }) {
      nodes {
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
        content
        date(formatString: "MMM DD, YYYY")
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        excerpt
        categories {
          nodes {
            name
          }
        }
        id
        slug
        internal {
          type
        }
      }
    }
  }
`;
