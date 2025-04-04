import { useEffect, useState } from "react";

const Post = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiCall = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await res.json();
                setPostData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        apiCall();
    }, []);

    return (
        <div className="p-4 w-full">
            <h2 className="text-xl font-bold mb-4">Posts</h2>

            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* Table Wrapper for Scroll */}
            <div className="relative overflow-x-auto max-w-full">
                <table className="w-full table-fixed text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="w-16 px-6 py-3">ID</th>
                            <th className="w-1/3 px-6 py-3">Title</th>
                            <th className="w-1/2 px-6 py-3">Body</th>
                            <th className="w-24 px-6 py-3">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postData.map((item, index) => (
                            <tr key={item.id} className="bg-white border-b">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4 overflow-hidden whitespace-nowrap text-ellipsis">
                                    {item.title}
                                </td>
                                <td className="px-6 py-4 overflow-hidden whitespace-nowrap text-ellipsis">
                                    {item.body}
                                </td>
                                <td className="px-6 py-4">$2999</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Post;
