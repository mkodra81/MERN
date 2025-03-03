import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import { useUserStore } from "../movies/userStore.js";
import "../styles/comments.css";

const Comments = ({ movieId, user }) => {
  const [comment, setComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const comments = useUserStore((state) => state.comments || {});
  const fetchComments = useUserStore((state) => state.fetchComments);
  const addComment = useUserStore((state) => state.addComment);
  const deleteComment = useUserStore((state) => state.deleteComment);
  const updateComment = useUserStore((state) => state.updateComment);
 
  useEffect(() => {
    fetchComments(movieId);
  }, [fetchComments, movieId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (comment.trim()) {
      if (editingCommentId) {
        await updateComment(editingCommentId, comment);
        setEditingCommentId(null);
      } else {
        await addComment(user._id, user.name, user.email, movieId, comment);
      }
      setComment("");
      fetchComments(movieId);
    }
  };

  const handleEdit = (id, text) => {
    setEditingCommentId(id);
    setComment(text);
  };

  const handleDelete = async (id) => {
    await deleteComment(id);
    fetchComments(movieId);
  };

  return (
    <Container className="py-5 text-white">
      <h2 className="display-6 mb-4">Comments</h2>
      {user ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formComment">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2">
            {editingCommentId ? "Update" : "Submit"}
          </Button>
        </Form>
      ) : (
        <Link to="/login">
        <Button variant="secondary" className="mt-2">
          Login to Comment
        </Button></Link>
      )}
      <ListGroup className="mt-3">
        {Array.isArray(comments)
          ? comments.map((c, index) => (
              <ListGroup.Item
                key={index}
                className="bg-dark text-light d-flex flex-column mb-3 p-3 rounded"
              >
                <div className="d-flex align-items-center">
                  <div className="avatar me-2">
                    <img
                      src={`https://placehold.co/40x40`}
                      alt={`${c.name}'s avatar`}
                      className="rounded-circle"
                    />
                  </div>
                  <div>
                    <strong>{c.name}</strong>
                  </div>
                  <span className="text-light ms-auto float-end">
                    {c.updatedAt ? c.updatedAt.slice(0, 10) : null}
                  </span>
                </div>
                <div className="mt-3 d-flex align-items-center">
                  <div>{c.text}</div>
                  <div className="ms-auto float-end">
                    {user !== null ? (user.email === c.email ) && (
                      <>
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() => handleDelete(c._id)}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() => handleEdit(c._id, c.text)}
                        >
                          Edit
                        </Button>
                      </>
                    ) : null}
                  </div>
                </div>
              </ListGroup.Item>
            ))
          : Object.values(comments).map((c, index) => (
              <ListGroup.Item
                key={index}
                className="bg-dark text-light d-flex flex-column mb-3 p-3 rounded"
              >
                <div className="d-flex align-items-center">
                  <div className="avatar me-2">
                    <img
                      src={`https://placehold.co/40x40`}
                      alt={`${c.name}'s avatar`}
                      className="rounded-circle"
                    />
                  </div>
                  <div>
                    <strong>{c.name}</strong>
                  </div>
                  <span className="text-light ms-auto float-end">
                    {c.updatedAt ? c.updatedAt.slice(0, 10) : null}
                  </span>
                </div>

                <div className="mt-2">{c.text}</div>
                <div className="mt-2 d-flex justify-content-between">
                  {user.email === c.email && (
                    <>
                      {" "}
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => handleDelete(c._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => handleEdit(c._id, c.text)}
                      >
                        Edit
                      </Button>{" "}
                    </>
                  )}
                </div>
              </ListGroup.Item>
            ))}
      </ListGroup>
    </Container>
  );
};

export default Comments;
