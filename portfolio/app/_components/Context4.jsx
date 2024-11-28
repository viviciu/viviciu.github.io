const Context4 = (({ text1, text2 }) => {
    // BASED OFF OF CONTEXT 1. USES A 6COL GRID FOR RULE OF THIRDS.
  return (
    <main>
      <div
        // gap-[5.06rem] !!
        className="
      pt-[2.9375rem] lg:pb-[5.06rem] mt-[3.5rem] mb-[5rem]
      lg:grid lg:grid-cols-6 flex
      gap-[5.06rem] 
      w-full h-fit 
      items-start
      "
      >
        <div
          className="
          col-span-2
        leading-p3
        lg:text-p
        text
        font-SuisseWorks
        font-regular
        text-offBlack2"
        >
          {text2}
        </div>
        <div
          className="text-offblack 
            font-SFProDisplay
            font-semibold
            tracking-['var(--ls-h1)']
            lg:leading-['var(--lh-h1)]
            leading-pMobile
            lg:text-6xl
            text-xl
            lg:col-span-2
            lg:col-start-4
            mb-24"
        >
          {text1}
        </div>
      </div>
    </main>
  );
});

export default Context4;
