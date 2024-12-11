"use client"; // Required for Next.js client-side rendering

import React from "react";

const FaqAccordian = () => {
  return (
    <section className="faq-sec bg-brown py_120">
      <div className="container">
        <div className="any-question">
          <h2 className="m-0 rwb text-center">
            Do you have any questions? We tried to answer most of them!
          </h2>
        </div>
        <div className="lorem-boxs pt_55 mx-auto">
          {/* Accordion */}
          <div className="accordion border_none" id="accordionFlushExample">
            {/* Accordion Item 1 */}
            <div className="accordion-item border_t">
              <h2 className="accordion-header fs-22" id="flush-headingOne">
                <button
                  className="accordion-button background collapsed fnt"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Lorem Ipsum is simply dummy text of the printing?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body background">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body. Nothing more exciting
                  happening here in terms of content.
                </div>
              </div>
            </div>

            {/* Accordion Item 2 */}
            <div className="accordion-item border_t">
              <h2 className="accordion-header fs-22" id="flush-headingTwo">
                <button
                  className="accordion-button background collapsed fnt"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Lorem Ipsum is simply dummy text of the printing?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body background">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Nothing more exciting
                  happening here in terms of content.
                </div>
              </div>
            </div>

            {/* Accordion Item 3 */}
            <div className="accordion-item border_t">
              <h2 className="accordion-header fs-22" id="flush-headingThree">
                <button
                  className="accordion-button background collapsed fnt"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Lorem Ipsum is simply dummy text of the printing?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body background">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content.
                </div>
              </div>
            </div>

            {/* Accordion Item 4 */}
            <div className="accordion-item border_t">
              <h2 className="accordion-header fs-22" id="flush-headingFour">
                <button
                  className="accordion-button background collapsed fnt"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Lorem Ipsum is simply dummy text of the printing?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body background">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the fourth item's accordion body. Nothing more exciting
                  happening here in terms of content.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordian;
