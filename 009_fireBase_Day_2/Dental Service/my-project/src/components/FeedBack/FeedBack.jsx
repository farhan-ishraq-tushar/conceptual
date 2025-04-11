import React from "react";

const FeedBack = ({ feedBackData }) => {
  console.log(feedBackData);

  return (
    <div className="justify-items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4 w-11/12 gap-4">
        {feedBackData.map((feed) => (
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <div className="flex gap-2">
                <img src={feed.userImg} className="w-10 h-10 rounded-full object-cover" />
                <h2 className="card-title">{feed.name}</h2>
              </div>
              <p>{feed.review}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
