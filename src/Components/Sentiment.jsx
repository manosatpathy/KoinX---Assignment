
const Sentiment = () => {
    return (
        <div className="px-8 bg-white pb-16">
            <h2 className="font-semibold text-3xl mt-6">Sentiment</h2>
            <div className="flex gap-3 items-center">
                <h3 className="font-semibold text-xl my-7">Key Events</h3>
                <div className="w-5 h-5 rounded-full text-white bg-gray-400 flex justify-center items-center">i</div>
            </div>
            <div className="flex gap-6 ">
                <div className="h-[11rem] w-[27rem] flex gap-2 bg-blue-100 pt-3 rounded-lg px-3">
                    <div>
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center ">
                            <img src="/images/fluentNews.png" alt="icon" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-sm">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                    </div>

                </div>
                <div className="h-[11rem] w-[28rem] flex gap-2 bg-green-100 rounded-lg pt-3 px-3">
                    <div>
                        <div className="w-10 h-10 bg-green-500 rounded-full flex justify-center items-center ">
                            <img src="/images/grow.png" alt="icon" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-sm">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                    </div>

                </div>
            </div>

            <div className="flex gap-3 items-center">
                <h3 className="font-semibold text-xl my-7">Analyst Estimate</h3>
                <div className="w-5 h-5 rounded-full text-white bg-gray-400 flex justify-center items-center">i</div>
            </div>
            <div>
                <div className="h-32 w-32 rounded-full bg-green-100 text-green-600 flex justify-center items-center font-semibold text-4xl"> 76%</div>
                <div></div>
            </div>
        </div>
    )
}

export default Sentiment