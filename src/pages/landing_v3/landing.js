import React, { useCallback, useEffect, useMemo, useState } from "react";
// hero images
import brand_logo from "../../assets/svg/logo.svg";
import hero_drone_image from "../../assets/images/hero_drone.png";
import hero_robo_image from "../../assets/images/hero_robo.png";
import hero_ribbon_long from "../../assets/images/hero_ribbon_long.png";
import hero_ribbon_short from "../../assets/images/hero_ribbon_short.png";
import hero_star from "../../assets/images/hero_star.png";
import hero_image from "../../assets/svg/hero img.svg";
import hero_person from "../../assets/svg/working person.svg";
import hero_gear from "../../assets/images/gear.png";
import hero_bulb from "../../assets/images/bulb.png";
// technology images
import tech_image_1 from "../../assets/images/tech_1.jpg";
import tech_image_2 from "../../assets/images/tech_2.jpg";
import tech_image_3 from "../../assets/images/tech_3.jpg";
import tech_image_4 from "../../assets/images/tech_4.jpg";
import tech_image_5 from "../../assets/images/tech_5.jpg";
import tech_image_6 from "../../assets/images/tech_6.jpg";
import tech_image_7 from "../../assets/images/tech_7.jpg";
//next level
import next_level_image from "../../assets/images/pink_circle.png";
// company images
import comp_1 from "../../assets/svg/apple.svg";
import comp_2 from "../../assets/svg/intel.svg";
import comp_3 from "../../assets/svg/paytm.svg";
import comp_4 from "../../assets/svg/daimler.svg";
import comp_5 from "../../assets/svg/disney.svg";
import comp_6 from "../../assets/svg/jio.svg";
// card images
import card_img_1 from "../../assets/svg/process-1.svg";
import card_img_2 from "../../assets/svg/experience.svg";
import card_img_3 from "../../assets/svg/people.svg";
import card_img_4 from "../../assets/svg/analyze.svg";
import card_img_5 from "../../assets/svg/brainstorm.svg";
import card_img_6 from "../../assets/svg/innovate.svg";
import card_img_7 from "../../assets/svg/strategy.svg";
import card_img_8 from "../../assets/svg/execute.svg";
import card_img_main from "../../assets/svg/process.svg";
import card_section_ribbon from "../../assets/images/bottom_right.png";
// awards images
import award_1 from "../../assets/images/award_1.png";
import award_2 from "../../assets/images/award_2.png";
import award_3 from "../../assets/images/award_3.png";
import award_4 from "../../assets/images/award_4.png";
import award_5 from "../../assets/images/award_5.png";
import award_6 from "../../assets/images/award_6.png";
// solution images
import solution_1 from "../../assets/svg/software.svg";
import solution_2 from "../../assets/svg/hardware.svg";
import solution_3 from "../../assets/svg/iot.svg";
import solution_4 from "../../assets/svg/ai.svg";
import solution_5 from "../../assets/svg/ml.svg";
import solution_6 from "../../assets/svg/data.svg";
import solution_7 from "../../assets/svg/design.svg";
// import solution_8 from "../../assets/svg/engagement.svg";
import solution_9 from "../../assets/svg/kpi.svg";
//slider
import slider_image from "../../assets/images/phone_trasnparent.png";
import back from "../../assets/svg/back.svg";
import next from "../../assets/svg/next.svg";
import heart from "../../assets/svg/Heart.svg";

// contact
import rocket_img from "../../assets/images/rocket.png";
import star_img from "../../assets/images/star.png";
import bottom_left_ribbon from "../../assets/images/bottom_left.png";
//  framer motion
import { motion, useScroll, useSpring } from "framer-motion";
import ReactLenis from "lenis/react";
import { textVariant } from "../../utils/motion";
// styles
import "./landing.css";

const Landing = () => {
  const technologyGridImages = useMemo(
    () => [
      tech_image_1,
      tech_image_2,
      tech_image_3,
      tech_image_4,
      tech_image_5,
      tech_image_6,
      tech_image_7,
    ],
    []
  );

  const clientImages = useMemo(
    () => [comp_1, comp_2, comp_3, comp_4, comp_5, comp_6],
    []
  );

  const cardData = useMemo(
    () => [
      { img: card_img_1, text: "We understand\n your process" },
      { img: card_img_2, text: "We experience\n your systems" },
      { img: card_img_3, text: "We work with\n your people" },
      { img: card_img_4, text: "We analyze\n your problems" },
      { img: card_img_5, text: "We brainstorm \n the solution" },
      { img: card_img_6, text: "We innovate\n for your future" },
      { img: card_img_7, text: "We create an \n innovation strategy" },
      { img: card_img_8, text: "We execute the\nstrategy seamlessly" },
    ],
    []
  );

  const sliderData = useMemo(
    () => [
      {
        title: "Next Generation Apps and Websites",
        text: "Creation of an innovative and highly reliable mobile app for a very critical and patented medical process for a medical research company.",
      },
      {
        title: "Next Generation Apps and Websites",
        text: "Creation of an innovative and highly reliable mobile app for a very critical and patented medical process for a medical research company.",
      },
      {
        title: "Next Generation Apps and Websites",
        text: "Creation of an innovative and highly reliable mobile app for a very critical and patented medical process for a medical research company.",
      },
      {
        title: "Next Generation Apps and Websites",
        text: "Creation of an innovative and highly reliable mobile app for a very critical and patented medical process for a medical research company.",
      },
    ],
    []
  );

  const solutionListData = useMemo(
    () => [
      {
        img: solution_1,
        title: "Software",
        text: "App, websites and dashboards",
      },
      {
        img: solution_2,
        title: "Hardware",
        text: "Devices, chips and Sensors",
      },
      {
        img: solution_3,
        title: "IoT Devices",
        text: "Connected intelligent devices",
      },
      {
        img: solution_4,
        title: "AI",
        text: "Leveraging the power of AI and Automation",
      },
      {
        img: solution_5,
        title: "ML",
        text: "Create and train models with existing data",
      },
      {
        img: solution_6,
        title: "Data Analytics",
        text: "Handle large data and provide insights",
      },
      {
        img: solution_7,
        title: "Design",
        text: "UI/UX optimization for better user engagement",
      },
      // {
      //   img: solution_8,
      //   title: "Customer Engagement",
      //   text: "Higher customer engagement strategies",
      // },
      {
        img: solution_9,
        title: "KPI Measurement",
        text: "Measuring everything and metricising",
      },
    ],
    []
  );

  const awardsData = useMemo(
    () => [
      {
        img: award_1,
        text: "Intel Worldwide \nTop Innovator 2016",
      },
      {
        img: award_2,
        text: "Intel BlackBelt \n for App Development",
      },
      {
        img: award_3,
        text: "Most Valuable \nDevelopers Award",
      },
      {
        img: award_1,
        text: "Intel Worldwide\n Top Innovator 2017",
      },
      {
        img: award_4,
        text: "Intel Best App to\n Stay n Sync",
      },
      {
        img: award_5,
        text: "Intel Best App \nStay Informed",
      },
      {
        img: award_6,
        text: "Intel Dixons Home \n Innovation",
      },
    ],
    []
  );

  const [sliderIndex, setSliderIndex] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const updateSliderIndex = useCallback(
    (index) => {
      if (0 <= index && index < 4) {
        setSliderIndex(index);
      } else {
        setSliderIndex(0);
      }
    },
    [setSliderIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      updateSliderIndex(sliderIndex + 1);
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, [sliderIndex, updateSliderIndex]);

  const renderTechnologyGridImages = useCallback(() => {
    return technologyGridImages.map((img, i) => {
      return (
        <motion.img
          variants={{
            hidden: {
              opacity: 0,
              ...(i === 0 || i === 5
                ? { y: -100 }
                : i === 1 || i === 4 || i === 6
                ? { y: 100 }
                : i === 2
                ? { x: -100 }
                : i === 3
                ? { x: 100 }
                : {}),
              // x: 100,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 140,
              },
            },
            show: {
              opacity: 1,
              ...(i === 0 || i === 1 || i === 4 || i === 5 || i === 6
                ? { y: 0 }
                : i === 2 || i === 3
                ? { x: 0 }
                : {}),

              transition: {
                type: "spring",
                bounce: 0.25,
                delay: 0.5,
                duration: 1,
              },
            },
          }}
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="show"
          exit={"hidden"}
          viewport={{ once: true }}
          key={i}
          src={img}
          alt="tech illustration"
        />
      );
    });
  }, [technologyGridImages]);

  const renderClientImages = useCallback(() => {
    return clientImages.map((img, i) => {
      return <img key={i} src={img} alt="company" />;
    });
  }, [clientImages]);

  const renderSliderData = useCallback(() => {
    return sliderData.map((item, i) => {
      return (
        <div key={i} className="landing_slider_item">
          <div>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
          <img src={slider_image} alt="" />
        </div>
      );
    });
  }, [sliderData]);

  const renderCardData = useCallback(() => {
    return cardData.map((item, i) => {
      return (
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 140,
              },
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.25,
                delay: 0,
                duration: 1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          key={item.text}
          className="landing_card"
          whileHover={{ scale: 1.1 }}
        >
          <img src={item.img} alt="" />
          <h5>{item.text}</h5>
        </motion.div>
      );
    });
  }, [cardData]);

  const renderSolutionData = useCallback(() => {
    return solutionListData.map((item, i) => {
      return (
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              // ...(i % 2 === 0 ? { x: 100 } : { x: -100 }),
              y: 100,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 140,
              },
            },
            show: {
              opacity: 1,
              y: 0,
              // x: 0,
              transition: {
                type: "spring",
                bounce: 0.25,
                delay: 0.5,
                duration: 1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          key={item.title}
          className="landing_solution_list_item"
        >
          <img src={item.img} alt="" />

          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </motion.div>
      );
    });
  }, [solutionListData]);

  const renderAwardsData = useCallback(() => {
    return awardsData.map((item, i) => {
      return (
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              ...(i % 2 === 0 ? { x: -100, y: 100 } : { y: -100, x: 100 }),
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 140,
              },
            },
            show: {
              opacity: 1,
              y: 0,
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.25,
                delay: 0.5,
                duration: 1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          whileHover={{ scale: 1.2 }}
          viewport={{ once: true }}
          key={item.text}
          className="landing_award cr-ptr"
        >
          <img src={item.img} alt="award" />
          <h5>{item.text}</h5>
        </motion.div>
      );
    });
  }, [awardsData]);
  return (
    <ReactLenis root>
      <main className="landing">
        {/* // <motion.div className="landing_progress_bar" style={{ scaleX }} /> */}
        <section className="landing_section landing_section_hero">
          <div className="container">
            <motion.img
              variants={{
                hidden: {
                  opacity: 0,

                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 0.7,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
              alt="brand"
              className="landing_brand"
              src={brand_logo}
            />
            <div>
              <motion.h1
                variants={textVariant(0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="landing_hero_title"
              >
                Do Greater Works
              </motion.h1>
              <motion.h4
                variants={{
                  hidden: {
                    opacity: 0,

                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 140,
                    },
                  },
                  show: {
                    opacity: 1,

                    transition: {
                      type: "spring",
                      bounce: 0.25,
                      delay: 1,
                      duration: 1,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="landing_hero_sub-title"
              >
                Radical Technology Innovations for Your Business
              </motion.h4>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,

                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 140,
                    },
                  },
                  show: {
                    opacity: 1,

                    transition: {
                      type: "spring",
                      bounce: 0.25,
                      delay: 1.25,
                      duration: 1,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <button className="landing_button landing_hero_button">
                  GET STARTED
                </button>
              </motion.div>
            </div>
            <motion.img
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 1.5,
                    duration: 0.7,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              src={hero_image}
              className="landing_hero_image_main"
              alt=""
            />
            <motion.img
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 1.5,
                    duration: 0.7,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              src={hero_robo_image}
              className="landing_hero_image_robo"
              alt=""
            />
            <motion.img
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 1.5,
                    duration: 0.7,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              src={hero_drone_image}
              className="landing_hero_image_drone"
              alt=""
            />
            <section>
              <motion.img
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 140,
                    },
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.25,
                      delay: 1.5,
                      duration: 0.7,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                src={hero_person}
                className=""
                alt=""
              />
              <div>
                <motion.h3
                  variants={{
                    hidden: {
                      opacity: 0,

                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 140,
                      },
                    },
                    show: {
                      opacity: 1,
                      transition: {
                        type: "spring",
                        bounce: 0.25,
                        delay: 0.5,
                        duration: 1,
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="landing_section_title_accent"
                >
                  Why us?
                </motion.h3>
                <motion.p
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 100,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 140,
                      },
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.7,
                        delay: 0.5,
                      },
                    },
                  }}
                  viewport={{ once: true }}
                  initial="hidden"
                  whileInView="show"
                  className="landing_section_text"
                >
                  Sometimes working with predefined processes{" "}
                  <span className="text_bg text_bg_gear">
                    <img src={hero_gear} alt="" />
                  </span>{" "}
                  and within a closed environment can cause even huge
                  enterprises to fail in innovation. We come as your Innovation
                  Partner{" "}
                  <span className="text_bg text_bg_bulb">
                    <img src={hero_bulb} alt="" />
                  </span>{" "}
                  to work closely with your team to fill this gap.
                </motion.p>
              </div>
            </section>
          </div>
          <motion.img
            variants={{
              hidden: {
                opacity: 0,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 140,
                },
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.25,
                  delay: 1.5,
                  duration: 0.7,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src={hero_ribbon_short}
            className="landing_hero_image_ribbon_short"
            alt=""
          />
          <motion.img
            variants={{
              hidden: {
                opacity: 0,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 140,
                },
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.25,
                  delay: 1.5,
                  duration: 0.7,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src={hero_ribbon_long}
            className="landing_hero_image_ribbon_long"
            alt=""
          />
          <motion.img
            variants={{
              hidden: {
                opacity: 0,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 140,
                },
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.25,
                  delay: 1.5,
                  duration: 0.7,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src={hero_star}
            className="landing_hero_image_star"
            alt=""
          />
        </section>
        {/* <section className="landing_section_innovation pd-b-32">
          <div className="container">
            <motion.h3
              variants={{
                hidden: {
                  opacity: 0,

                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="landing_section_title_accent"
            >
              Why us?
            </motion.h3>
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    duration: 0.7,
                    delay: 0.5,
                  },
                },
              }}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="show"
              className="landing_section_text"
            >
              Sometimes working with predefined processes and within a closed
              environment can cause even huge enterprises to fail in innovation.
              We come as your Innovation Partner to work closely with your team
              to fill this gap.
            </motion.p>
            {/* <motion.img
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    // delay: 1.5,
                    delay: 0.5,
                    duration: 0.7,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              src={innovation_image}
              alt=""
            /> *
          </div>
        </section> */}
        <section className="landing_section_technology mg-t-32 pd-t-32">
          <div className="container">
            <motion.h3
              variants={{
                hidden: {
                  opacity: 0,

                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,

                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="landing_section_title_accent ta-ctr"
            >
              what do we believe?
            </motion.h3>
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 0.7,
                  },
                },
              }}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="show"
              className="landing_section_text_l ta-ctr"
            >
              We believe in the use of technological innovations for the
              betterment of the world.
            </motion.p>
            <div className="landing_technology_grid flx aln-str">
              {renderTechnologyGridImages()}
            </div>
          </div>
        </section>
        <section className="landing_section_next">
          <div className="container">
            <motion.h3
              variants={{
                hidden: {
                  opacity: 0,

                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,

                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              // className=""
            >
              What do we do?
            </motion.h3>
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,

                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,

                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              We help you to:
            </motion.p>
            <h3 className="landing_section_text_l">
              Make Radical{" "}
              <strong className="landing_section_text_l_multicolor">
                technology innovations
              </strong>{" "}
              <br /> with both{" "}
              <strong className="landing_section_text_l_multicolor">
                speed and scale
              </strong>{" "}
              to take <br /> your business to the{" "}
              <strong className="landing_section_text_l_multicolor">
                next level
              </strong>
            </h3>
            <img src={next_level_image} alt="pink cricle" />
          </div>
        </section>
        <section className="landing_section_client pd-b-32">
          <div className="container">
            <motion.h3
              variants={{
                hidden: {
                  opacity: 0,

                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,

                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="landing_section_title_accent ta-ctr"
            >
              What is our track record?
            </motion.h3>
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="landing_section_text landing_section_text_s ta-ctr "
            >
              We have worked with some of the largest companies in the world to
              create unbelievable innovations.
            </motion.p>
            <motion.h5
              variants={{
                hidden: {
                  opacity: 0,

                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,

                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="ta-ctr mg-b-24"
            >
              Top companies we have worked with
            </motion.h5>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flx aln-ctr jty-ctr flx-wrp landing_company"
            >
              {renderClientImages()}
            </motion.div>
          </div>
        </section>
        <section className="landing_section_cards ">
          <div className="container pd-t-32">
            <img src={card_section_ribbon} alt="" />
            <div className="landing_section_cards_container">
              <motion.h3
                variants={{
                  hidden: {
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 140,
                    },
                  },
                  show: {
                    opacity: 1,

                    transition: {
                      type: "spring",
                      bounce: 0.25,
                      delay: 0.5,
                      duration: 1,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="landing_section_title_accent ta-ctr mg-b-32"
              >
                How we do it?
              </motion.h3>
              <div className="landing_card_grid ">{renderCardData()}</div>
            </div>
            <img src={card_img_main} alt="" />
          </div>
        </section>
        <section className="landing_section_slider pd-t-32 mg-t-32">
          <div className="container">
            <motion.h3
              variants={{
                hidden: {
                  opacity: 0,

                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,

                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="landing_section_title_accent ta-ctr mg-b-16"
            >
              Some Sample Innovation Partnerships
            </motion.h3>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,

                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,

                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className=" w-100 flx aln-ctr jty-spb gp-12"
            >
              <div className="landing_slider">
                <div
                  className="landing_slider_container"
                  style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
                >
                  {renderSliderData()}
                </div>
                <div className="landing_slider_slideshow flx aln-ctr jty-ctr gp-24">
                  <button
                    className="landing_slider_slideshow_control"
                    disabled={sliderIndex === 0}
                    onClick={() => {
                      updateSliderIndex(sliderIndex - 1);
                    }}
                  >
                    <img src={back} alt="" />
                  </button>
                  <div className="flx aln-ctr gp-8">
                    <button
                      className={sliderIndex === 0 ? "active" : ""}
                      onClick={() => {
                        updateSliderIndex(0);
                      }}
                    ></button>
                    <button
                      className={sliderIndex === 1 ? "active" : ""}
                      onClick={() => {
                        updateSliderIndex(1);
                      }}
                    ></button>
                    <button
                      className={sliderIndex === 2 ? "active" : ""}
                      onClick={() => {
                        updateSliderIndex(2);
                      }}
                    ></button>
                    <button
                      className={sliderIndex === 3 ? "active" : ""}
                      onClick={() => {
                        updateSliderIndex(3);
                      }}
                    ></button>
                  </div>

                  <button
                    className="landing_slider_slideshow_control"
                    disabled={sliderIndex === 3}
                    onClick={() => {
                      updateSliderIndex(sliderIndex + 1);
                    }}
                  >
                    <img src={next} alt="" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="landing_section_solution mg-t-32">
          <div className="container">
            <motion.h3
              variants={{
                hidden: {
                  opacity: 0,

                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,

                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="landing_section_title_accent ta-ctr mg-b-8"
            >
              what we use ?
            </motion.h3>
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 140,
                  },
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    delay: 0.5,
                    duration: 1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="landing_section_text landing_section_text_s ta-ctr"
            >
              We use the following strategies for innovative solutions
            </motion.p>
            <div className="landing_solution_list">{renderSolutionData()}</div>
          </div>
        </section>
        <section className="landing_section_awards">
          <div className="container">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="bg-blur">
              <motion.h3
                variants={{
                  hidden: {
                    opacity: 0,
                    // y: 100,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 140,
                    },
                  },
                  show: {
                    opacity: 1,
                    // y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.25,
                      delay: 0.5,
                      duration: 1,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="landing_section_title_accent ta-ctr"
              >
                Who we are ?
              </motion.h3>
              <motion.p
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 100,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 140,
                    },
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.25,
                      delay: 0.5,
                      duration: 1,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="landing_section_text landing_section_text_s ta-ctr"
              >
                We work with the Top innovators in the world and are recognized
                by Intel.
              </motion.p>
              <div className="landing_awards_grid">{renderAwardsData()}</div>
            </div>
          </div>
          <img src={bottom_left_ribbon} className="ribbon" alt="" />
        </section>
        <div className="landing_footer_bg">
          <motion.section
            variants={{
              hidden: {
                opacity: 0,

                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 140,
                },
              },
              show: {
                opacity: 1,

                transition: {
                  type: "spring",
                  bounce: 0.25,
                  delay: 0.5,
                  duration: 0.7,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="landing_section_contact"
          >
            <img src={card_section_ribbon} className="ribbon" alt="" />
            <div className="container">
              <div className="landing_section_contact_content">
                <h3 className="landing_section_text landing_section_text_s">
                  Your <strong>next big innovation</strong>
                  <br />
                  could be around the corner.
                </h3>
                <p>Get in touch with us to explore more.</p>
                <button className="landing_button landing_hero_button">
                  GET STARTED
                </button>
                <img src={star_img} alt="" />
              </div>
              <div className="landing_section_contact_image">
                <img src={rocket_img} alt="" />
              </div>
            </div>
          </motion.section>
          <footer className="landing_footer">
            <div className="container">
              <div className="flx jty-spb aln-ctr flx-wrp gp-16 ">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,

                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 140,
                      },
                    },
                    show: {
                      opacity: 1,
                      transition: {
                        type: "spring",
                        bounce: 0.25,
                        delay: 0.2,
                        duration: 0.5,
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flx aln-ctr gp-12 landing_footer_section"
                >
                  <p>Made with</p>
                  <img src={heart} alt="" />
                  <p>from Chennai, India.</p>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 140,
                      },
                    },
                    show: {
                      opacity: 1,
                      transition: {
                        type: "spring",
                        bounce: 0.25,
                        delay: 0.2,
                        duration: 0.5,
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="landing_footer_section flx aln-ctr gp-32"
                >
                  <p>Terms and Conditions</p>
                  <p>Privacy Policy</p>
                </motion.div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </ReactLenis>
  );
};

export default Landing;
