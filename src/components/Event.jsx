import event from "../assets/event.png";
const Event = () => {
  return (
    <div id="event" className="">
      <div class="h-[5rem] w-max max-w-[100vw] mx-auto">
        <div class="font-titilium text-white sm:pl-[4rem] sm:pr-[1rem] px-[1rem] text-4xl font-extrabold mt-[3rem] py-4 text-center">
          ABOUT THIS INNOVATEIN48 EVENT
        </div>
        <div class="h-[0.3rem] w-16 mx-auto bg-[#4acc3e] mt-2"></div>
      </div>
      <div class="flex flex-row event-body flex-wrap justify-between closing-ceremony sm:sm:ml-[108px] mt-8 margintop-event">
        <div className=" sm:max-w-[40vw]">
          <div className="text-white text-[16px] text-md mt-[2rem] sm:mb-8">
            Join us for this 48-hour Ideathon and create a pitch deck to show
            how your innovative solutions can solve for current industry
            challenges. Propose a standalone solution, or leverage an
            integration with current FIS APIs and products.
          </div>
          <div className="flex flex-wrap justify-between closing-ceremony content-center event-times text-[18px]">
            <div className="min-w-[16rem]">
              <div class="font-semibold gap-1 mt-4 text-[#4BCD3E] text-[24px]">
                KICK OFF
              </div>
              <div class="text-white  mt-2">August 20 - 21</div>
              <div class="text-white  mt-1">10:00 a.m. to 8:00 p.m. (IST)</div>
            </div>
            <div className="min-w-[16rem]">
              <div class="font-semibold gap-1 mt-4 text-[#4BCD3E] text-[24px]">
                IDEATHON KICKOFF
              </div>
              <div class="text-white mt-2">August 26</div>
              <div class="text-white mt-1">12:00 p.m. (IST)</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between closing-ceremony content-center mt-4 event-times text-[18px]">
            <div className="min-w-[16rem]">
              <div class="font-semibold gap-1 mt-4 text-[#4BCD3E] text-[24px]">
                IDEATHON
              </div>
              <div class="text-white mt-2">August 27 8:00 a.m. -</div>
              <div class="text-white mt-1">August 29 8:00 a.m. (IST)</div>
            </div>
            <div className="min-w-[16rem]">
              <div class="font-semibold gap-1 mt-4 text-[#4BCD3E] text-[24px]">
                DEMO DAY
              </div>
              <div class="text-white  mt-2">August 31 - September 2</div>
              <div class="text-white  mt-1">10:00 a.m. to 8:00 p.m.(IST)</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-start closing-ceremony mt-4 content-center event-times text-[18px]">
            <div className="min-w-[16rem]">
              <div class="font-semibold gap-1 mt-4 text-[#4BCD3E] text-[24px]">
                CLOSING CEREMONY
              </div>
              <div class="text-white mt-2">September 3</div>
              <div class="text-white mt-1">10:00 a.m. to 12:00 p.m.(IST)</div>
            </div>
          </div>
        </div>
        <div className="mx-4 sm:mx-0 mt-10">
          <div>
            <img className="sm:mr-[108px] eventimg" src={event} alt="participate"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
