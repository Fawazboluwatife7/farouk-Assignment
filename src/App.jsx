import React, { useEffect, useState } from "react";

const ClaimSideDashboard = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const [lastMonthPaidClaims, setLastMonthPaidClaims] = useState("");
    const [currentMonthPaidClaims, setCurrentMonthPaidClaims] = useState("");
    const [thrirtyDaysPaidBatches, setThrirtyDaysPaidBatches] = useState("");
    const [totalPaidBatchesForTheYear, setTotalPaidBatchesForTheYear] =
        useState("");

    useEffect(() => {
        const today = new Date();
        const end = today.toISOString().split("T")[0];

        const pastDate = new Date();
        pastDate.setDate(today.getDate() - 30);
        const start = pastDate.toISOString().split("T")[0];

        // Update state

        if (start.trim() && end.trim()) {
            getBatchTotalOfTheLastThirtyDays(start, end);
        }
        getLastMonthBatchTotal();
        getMonthlyCurrentPaidBatchTotal();
        getBatchTotalOfNewYear();
    }, []);

    async function getLastMonthBatchTotal() {
        const today = new Date();
        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth() - 1,
            2,
        );
        const lastDayOfPreviousMonth = new Date(
            previousMonth.getFullYear(),
            previousMonth.getMonth() + 1,
            1,
        );

        const start = previousMonth.toISOString().split("T")[0];
        const end = lastDayOfPreviousMonth.toISOString().split("T")[0];
        console.log("Last month start date:", start);
        console.log("Last month end date:", end);

        try {
            // Fetch data from the API
            const response = await fetch(
                `${apiUrl}/api/EnrolleeClaims/GetBatchSumaary?Fromdate=${start}&Todate=${end}&DateType=2`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();

            // Check if the data is valid
            if (!data || !data.result) {
                console.error("Invalid API response:", data);
                return 0;
            }

            const paidItems = data.result.filter(
                (item) =>
                    item.BatchStatus === "Paid" &&
                    item.PaidDate &&
                    new Date(item.PaidDate) >= previousMonth &&
                    new Date(item.PaidDate) <= lastDayOfPreviousMonth,
            );

            // Sum up BatchTotal for the filtered items
            const totalBatchTotal = paidItems.reduce(
                (sum, item) => sum + (item.BatchTotal || 0),
                0,
            );
            console.log(
                `Total Paid Batch Amount last month: ${totalBatchTotal}`,
            );
            setLastMonthPaidClaims(totalBatchTotal.toLocaleString("en-US"));
        } catch (error) {
            console.error("Error fetching data from API:", error);
            return 0;
        }
    }

    async function getMonthlyCurrentPaidBatchTotal() {
        const today = new Date();
        const firstDayOfMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            1,
        );
        const firsttDate = firstDayOfMonth.toLocaleDateString("en-CA");

        const PresentDate = today.toLocaleDateString("en-CA");

        console.log("FirstDate:", firsttDate);
        console.log("EndDate:", PresentDate);

        try {
            const response = await fetch(
                `${apiUrl}/api/EnrolleeClaims/GetBatchSumaary?Fromdate=${firsttDate}&Todate=${PresentDate}&DateType=2`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();

            if (!data || !data.result) {
                console.error("Invalid API response:", data);
                return 0;
            }

            const paidItems = data.result.filter(
                (item) => item.BatchStatus === "Paid",
            );

            console.log("current month total items", paidItems.length);

            const totalBatchTotal = paidItems.reduce(
                (sum, item) => sum + (item.BatchTotal || 0),
                0,
            );

            console.log(`Total Paid Batch Amount: ${totalBatchTotal}`);
            setCurrentMonthPaidClaims(totalBatchTotal.toLocaleString("en-US"));
        } catch (error) {
            console.error("Error fetching data from API:", error);
            return 0;
        }
    }

    async function getBatchTotalOfTheLastThirtyDays(fromDate, toDate) {
        console.log("startzz", fromDate), console.log("endzzz", toDate);

        const response = await fetch(
            `${apiUrl}/api/EnrolleeClaims/GetBatchSumaary?Fromdate=${fromDate}&Todate=${toDate}&DateType=2`,
            {
                method: "GET",
            },
        );
        const data = await response.json();

        const paymentItems = data.result.filter(
            (item) => item.BatchStatus === "Payment Requisition",
        );

        // Count the number of paid items
        const paymentCount = paymentItems.length;

        console.log("number of p r", paymentCount);

        // Calculate the total BatchTotal for paid items
        const tpaymentTotal = paymentItems.reduce(
            (sum, item) => sum + item.BatchTotal,
            0,
        );

        console.log("payment req", tpaymentTotal);
        setThrirtyDaysPaidBatches(tpaymentTotal.toLocaleString("en-US"));
    }

    async function getBatchTotalOfNewYear() {
        const today = new Date();
        const startOfYear = new Date(today.getFullYear(), 0, 2);

        const startDate = startOfYear.toISOString().split("T")[0];
        const endDate = today.toISOString().split("T")[0];

        // console.log("total Start Date:", startDate);
        // console.log("total End Date:", endDate);

        const response = await fetch(
            `${apiUrl}/api/EnrolleeClaims/GetBatchSumaary?Fromdate=${startDate}&Todate=${endDate}&DateType=2`,
            {
                method: "GET",
            },
        );
        const data = await response.json();

        const paymentItems = data.result.filter(
            (item) => item.BatchStatus === "Paid",
        );

        const paymentCount = paymentItems.length;

        const totalPaymentForTheYear = paymentItems.reduce(
            (sum, item) => sum + item.BatchTotal,
            0,
        );

        setTotalPaidBatchesForTheYear(
            totalPaymentForTheYear.toLocaleString("en-US"),
        );
    }

    useEffect(() => {
        const intervalId = setInterval(
            () => {
                getLastMonthBatchTotal();
                getMonthlyCurrentPaidBatchTotal();
                getBatchTotalOfTheLastThirtyDays();
                getBatchTotalOfNewYear();
            },
            30 * 60 * 1000,
        );

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative min-h-screen justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 overflow-hidden flex flex-col items-center">
            <div className="flex justify-between items-center w-full px-3 py-4 rounded-lg">
                <img
                    src="/xx.jpg"
                    alt="Profile"
                    className="w-[6rem] h-[6rem] rounded-full border-4 border-gray-300"
                />
                <div className="flex-1 ml-4">
                    <h1 className="text-xl font-semibold text-gray-800">
                        NAME: MUSTAPHA FAROUK TEMIDAYO
                    </h1>
                    <p className="text-sm text-gray-800">
                        COURSE CODE: COM 327
                    </p>
                    <p className="text-sm text-gray-800">
                        COURSE TITLE: ARTIFICIAL INTELLIGENCE
                    </p>
                    <p className="text-sm text-gray-800">
                        MATRIC NO: F/HD/23/3210014
                    </p>
                </div>
            </div>

            <div className="flex w-full pt-1 gap-3 rounded-md px-3 justify-center">
                <div className="flex-1 bg-[#5f5f8c84] border-white h-[19rem] rounded-md items-center justify-center">
                    <div>
                        <h1 className="text-black py-4 px-[1rem] text-[15px] pt-[3rem]">
                            <span className="text-xl font-semibold">
                                1. Machine Learning (ML)
                            </span>
                            <p>
                                Machine Learning is a branch of artificial
                                intelligence (AI) that focuses on developing
                                algorithms that allow computers to learn from
                                and make predictions based on data. Instead of
                                being explicitly programmed for every possible
                                scenario, ML models improve their performance
                                over time by analyzing patterns in data.
                            </p>
                            <p>
                                <strong>Example:</strong>
                                <ul>
                                    <li>
                                        A recommendation system in Netflix that
                                        suggests movies based on your viewing
                                        history.
                                    </li>
                                    <li>
                                        Spam filters in email that classify
                                        messages as spam or not based on
                                        previous emails.
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <strong>Types of ML:</strong>
                                <ul>
                                    <li>
                                        Supervised Learning (uses labeled data)
                                    </li>
                                    <li>
                                        Unsupervised Learning (uses unlabeled
                                        data)
                                    </li>
                                    <li>
                                        Reinforcement Learning (learns through
                                        rewards and penalties)
                                    </li>
                                </ul>
                            </p>
                        </h1>
                    </div>
                </div>
                <div className="flex-1 bg-[#5f5f8c84] border-white h-[19rem] rounded-md items-center justify-center">
                    <div className="">
                        <h1 className="text-black py-4 px-[1rem] text-[15px] pt-[3rem]">
                            <span className="text-xl font-semibold">
                                2. Artificial Intelligence (AI)
                            </span>
                            <p>
                                Artificial Intelligence is a broad field of
                                computer science that aims to create machines
                                capable of performing tasks that typically
                                require human intelligence, such as
                                problem-solving, reasoning, decision-making, and
                                natural language understanding. AI encompasses
                                machine learning, robotics, computer vision, and
                                more.
                            </p>
                            <p>
                                <strong>Example:</strong>
                                <ul>
                                    <li>
                                        Virtual assistants like Siri and Google
                                        Assistant.
                                    </li>
                                    <li>
                                        Autonomous vehicles that navigate and
                                        drive without human intervention.
                                    </li>
                                    <li>Chatbots used for customer service.</li>
                                </ul>
                            </p>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="flex w-full pt-3 gap-3 rounded-md px-3 justify-center mt-2">
                <div className="flex-1 bg-[#5f5f8c84] border-white h-[19rem] rounded-md items-center justify-center">
                    <div>
                        <h1 className="text-black py-4 px-[1rem] text-[12px] pt-[3rem]">
                            <span className="text-xl font-semibold">
                                3. Supervised Learning (Supervised Data/Model)
                            </span>
                            <p>
                                Supervised learning is a machine learning
                                approach where the model is trained using
                                labeled data. The dataset contains input-output
                                pairs, meaning the algorithm learns from known
                                outcomes to make future predictions.
                            </p>
                            <p>
                                <strong>Example:</strong>
                                <ul>
                                    <li>
                                        Email classification: Training a model
                                        with labeled emails as "spam" or "not
                                        spam."
                                    </li>
                                    <li>
                                        Predicting house prices based on labeled
                                        data containing square footage,
                                        location, and prices.
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <strong>
                                    Common algorithms used in supervised
                                    learning:
                                </strong>
                                <ul>
                                    <li>Linear Regression</li>
                                    <li>Decision Trees</li>
                                    <li>Support Vector Machines (SVM)</li>
                                    <li>Neural Networks</li>
                                </ul>
                            </p>
                        </h1>
                    </div>
                </div>
                <div className="flex-1 bg-[#5f5f8c84] border-white h-[19rem] rounded-md items-center justify-center">
                    <div className="">
                        <h1 className="text-black py-4 px-[1rem] text-[12px] pt-[3rem]">
                            <span className="text-xl font-semibold">
                                4. Unsupervised Learning
                            </span>
                            <p>
                                Unsupervised learning is a machine learning
                                approach where the model is given unlabeled data
                                and is expected to identify patterns,
                                structures, or relationships without predefined
                                categories. It is commonly used for clustering
                                and association tasks.
                            </p>
                            <p>
                                <strong>Example:</strong>
                                <ul>
                                    <li>
                                        Customer segmentation in marketing,
                                        where customers are grouped based on
                                        purchasing behavior.
                                    </li>
                                    <li>
                                        Anomaly detection in cybersecurity to
                                        detect unusual behavior patterns in
                                        network traffic.
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <strong>
                                    Common algorithms used in unsupervised
                                    learning:
                                </strong>
                                <ul>
                                    <li>K-Means Clustering</li>
                                    <li>Hierarchical Clustering</li>
                                    <li>Principal Component Analysis (PCA)</li>
                                </ul>
                            </p>
                        </h1>
                    </div>
                </div>
                <div className="flex-1 bg-[#5f5f8c84] border-white h-[19rem] rounded-md items-center justify-center">
                    <div className="">
                        <h1 className="text-black py-4 px-[1rem] text-[10px] pt-[3rem]">
                            <span className="text-xl font-semibold">
                                5. Deep Learning
                            </span>
                            <p>
                                Deep learning is a subset of machine learning
                                that uses neural networks with multiple layers
                                (deep neural networks) to model complex patterns
                                in data. It is particularly effective in tasks
                                such as image recognition, speech processing,
                                and natural language understanding.
                            </p>
                            <p>
                                <strong>Example:</strong>
                                <ul>
                                    <li>
                                        Self-driving cars that use deep learning
                                        to recognize traffic signs and
                                        pedestrians.
                                    </li>
                                    <li>
                                        Facial recognition systems in social
                                        media applications.
                                    </li>
                                    <li>
                                        Voice assistants that can understand
                                        natural speech with high accuracy.
                                    </li>
                                </ul>
                            </p>
                            <p>
                                <strong>
                                    Popular deep learning frameworks:
                                </strong>
                                <ul>
                                    <li>TensorFlow</li>
                                    <li>PyTorch</li>
                                    <li>Keras</li>
                                </ul>
                            </p>
                            <p>
                                <strong>
                                    Deep learning models include architectures
                                    such as:
                                </strong>
                                <ul>
                                    <li>
                                        Convolutional Neural Networks (CNNs) –
                                        for image processing.
                                    </li>
                                    <li>
                                        Recurrent Neural Networks (RNNs) – for
                                        sequential data like time series and
                                        speech.
                                    </li>
                                    <li>
                                        Transformers – used in NLP models like
                                        GPT (Generative Pre-trained
                                        Transformer).
                                    </li>
                                </ul>
                            </p>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClaimSideDashboard;
