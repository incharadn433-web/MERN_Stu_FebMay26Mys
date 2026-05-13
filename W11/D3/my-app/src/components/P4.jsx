//Crud operation using Axios
import { useEffect, useState } from "react";
import {api} from "../services/api";
export function CRUDOperation() {
    //true while data is being fetched
    const [loading, setLoading] = useState(false);

    //To store error message
    const [error, setError] = useState("");
    const [result, setResult] = useState(null);

    function resetState() {
        setError("");
        setResult(null);
    }
    //create
    async function createPost() {

        setLoading(true);
        resetState();
        try {
            const response = await api.post("/posts", {
                title: "React Learning",
                body: "POST request example",
                userId: 1,
            });
            console.log("Created post:", response.data);
            setResult({
                action: "POST",
                message: "Post created successfully",
                data: response.data,
            });
        }
        catch (error) {
            console.error("error while creating post:", error);
            setError(error.message || "Failed to create post");
        } finally {
            setLoading(false);
        }
    }

    //update
    async function updatePost() {
        setLoading(true);
        resetState();
        try {
            const response = await api.put("/posts/1", {
                id: 1,
                title: "Updated Learning",
                body: "Updated body content",
                userId: 1,
            });
            console.log("Updated post:", response.data);
            setResult({
                action: "PUT",
                message: "Post updated successfully",
                data: response.data,
            });
        }
        catch (error) {
            console.error("error while updating post:", error);
            setError(error.message || "Failed to update post");
        } finally {
            setLoading(false);
        }
    }

    //Delete
    async function deletePost() {
        setLoading(true);
        resetState();
        try {
            const response = await api.delete("/posts/1", {
                id: 1,
                title: "Deleted Learning",
                body: "Deleted body content",
                userId: 1,
            });
            console.log("Deleted post:", response.data);
            setResult({
                action: "DELETE",
                message: "Post deleted successfully",
                data: response.data,
            });
        }
        catch (error) {
            console.error("error while deleting post:", error);
            setError(error.message || "Failed to delete post");
        } finally {
            setLoading(false);
        }
    }
    return (

        <section>
            <h2>CRUD Operation</h2>
            <button onClick={createPost} disabled={loading}>POST</button>
            <button onClick={updatePost} disabled={loading}>Update</button>
            <button onClick={deletePost} disabled={loading}>Delete</button>
            {/* Loading UI */}
            {loading && <p>Request in progress...</p>}

            {/* Error Ui */}
            {!loading && error && <p>Error: {error}</p>}

            {/* Success UI */}
            {!loading && result && (
                <div>
                    <h3>{result.action} Result</h3>
                    <p>{result.message}</p>
                    <pre>{JSON.stringify(result.data,null,2)}</pre>
                </div>
            )}
        </section>
    )


}
