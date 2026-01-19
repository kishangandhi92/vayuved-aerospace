import { HiOutlineCog, HiOutlineCube, HiOutlineDocumentText, HiOutlineShieldCheck } from "react-icons/hi";

export default function Manufacturing() {
  return (
    // <section className="bg-gray-100 py-24">
     
    //   <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    //     <div>
    //       <h2 className="font-secondary text-4xl text-ink">
    //          Manufacturing &amp; Made in India
    //       </h2>

    //       <p className="mt-10 max-w-xl font-primary text-lg text-steel leading-relaxed">
    //        Vayuved Aerospace is committed to{" "}
    //         <strong className="text-gray-900">
    //           designing and developing products in India
    //         </strong>
    //         , with a clear focus on{" "}
    //         <strong className="text-gray-900">
    //           local engineering capability and long-term manufacturability
    //         </strong>
    //         .
    //       </p>

    //        <p className="mt-6 max-w-xl font-primary text-lg text-gray-700 leading-relaxed">
    //       This philosophy supports India’s broader objective of building{" "}
    //       <strong className="text-gray-900">
    //         self-reliant aerospace and defence electronics capability
    //       </strong>
    //       .
    //     </p>
    //     </div>

    //     <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-8 space-y-2">
    //       <ItemCard
    //         icon={<HiOutlineCog size={20} />}
    //         title="Design for manufacturability and testability"
    //       />

    //       <ItemCard
    //         icon={<HiOutlineCube size={20} />}
    //         title="Component availability and lifecycle awareness"
    //       />

    //       <ItemCard
    //         icon={<HiOutlineDocumentText size={20} />}
    //         title="Traceable hardware revisions"
    //       />

    //       <ItemCard
    //         icon={<HiOutlineShieldCheck size={20} />}
    //         title="Alignment with Indian defence and institutional procurement expectations"
    //       />
    //     </div>
    //   </div>
    // </section>
     <section className="bg-surface py-24">
     
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
        <div>
          <h2 className="font-secondary text-4xl text-white">
             Manufacturing &amp; Made in India
          </h2>

          <p className="mt-10 max-w-xl font-primary text-lg text-white leading-relaxed">
           Vayuved Aerospace is committed to{" "}
            <strong>
              designing and developing products in India
            </strong>
            , with a clear focus on{" "}
            <strong>
              local engineering capability and long-term manufacturability
            </strong>
            .
          </p>

           <p className="mt-6 max-w-xl font-primary text-lg text-white leading-relaxed">
          This philosophy supports India’s broader objective of building{" "}
          <strong>
            self-reliant aerospace and defence electronics capability
          </strong>
          .
        </p>
        </div>

        <div className="bg-secondary rounded-2xl border border-black/5 shadow-sm p-8 space-y-2">
          <ItemCard
            icon={<HiOutlineCog size={20} />}
            title="Design for manufacturability and testability"
          />

          <ItemCard
            icon={<HiOutlineCube size={20} />}
            title="Component availability and lifecycle awareness"
          />

          <ItemCard
            icon={<HiOutlineDocumentText size={20} />}
            title="Traceable hardware revisions"
          />

          <ItemCard
            icon={<HiOutlineShieldCheck size={20} />}
            title="Alignment with Indian defence and institutional procurement expectations"
          />
        </div>
      </div>
    </section>
  );
}
function ItemCard({ icon, title }) {
  return (
    <div
      className="flex items-center gap-4 p-2 rounded-lg transition-all duration-300 ease-out
                hover:-translate-y-1"
    >
      <div className="min-w-10 min-h-10 bg-gray-200 flex items-center justify-center rounded-md bg-surface text-white">
        {icon}
      </div>

      <div>
        <h4 className="font-primary text-white">{title}</h4>
      </div>
    </div>
  );
}
