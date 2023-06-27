import React from "react";
import styles from "../styles/middleSection.module.css";

const toolasSrcArray = [
  {
    src: "https://cdn.iconscout.com/icon/free/png-256/free-aws-1869025-1583149.png",
    alt: "AWS",
  },
  {
    src: "https://coralogix.com/wp-content/uploads/2021/06/icon_cloud_192pt_clr-1.png",
    alt: "GCP",
  },
  {
    src: "https://swimburger.net/media/ppnn3pcl/azure.png",
    alt: "Azure",
  },
  {
    src: "https://cdn.iconscout.com/icon/free/png-256/free-salesforce-282298.png",
    alt: "Salesforce",
  },
];

const MiddleSection = () => {
  return (
    <section className={styles.parent_section}>
      <div className={styles.section_child_1}>
        <h2 style={{ color: "gray" }}>Connect your Providers</h2>
        <input type="text" placeholder="search tool" className={styles.input} />

        {/* ---------------logos----------------------- */}
        <div className={styles.tools_images}>
          {toolasSrcArray.map((el) => {
            return (
              <div>
                <div
                  style={{
                    padding: "5px 5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <img
                    className={styles.tools_images_img}
                    src={el.src}
                    alt={el.alt}
                  />
                </div>

                <p
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    fontSize: "x-small",
                    color: "#6b6d86",
                  }}
                >
                  {el.alt}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.section_child_2}>
        <div className={styles.other_info}>
          <p>Not ready yet?</p>
          <button className={styles.section_child_2_btn}>Experience</button>
          <p style={{ color: "#0b5ed7" }}>Watch Video</p>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
