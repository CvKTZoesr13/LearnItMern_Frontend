import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";

const UpdatePostModal = () => {
  // Contexts
  const {
    postState: { post },
    showUpdatePostModal,
    setShowUpdatePostModal,
    updatePost,
    setShowToast,
  } = useContext(PostContext);
  // close modal method
    const closeDialog = () => {
        setUpdatedPost(post)
      setShowUpdatePostModal(false)
    };

  // State
  const [updatedPost, setUpdatedPost] = useState(post);

  useEffect(() =>setUpdatedPost(post), [post])
  const { title, description, url, status } = updatedPost;
  //   const resetAddPostData = () => {
  //     setUpdatedPost({
  //       title: "",
  //       description: "",
  //       url: "",
  //       status: "TO LEARN",
  //     });
  //     setShowUpdatePostModal(false);
  //   };
  const onChangeUpdatedPostForm = (event) =>
    setUpdatedPost({ ...updatedPost, [event.target.name]: event.target.value });
  ///onSubmit
  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updatePost(updatedPost);
    setShowUpdatePostModal(false);
    setShowToast({
      show: true,
      message,
      type: success ? "success" : "danger",
    });
  };

  return (
    <Modal show={showUpdatePostModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Making progress?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              title="text"
              placeholder="Title"
              name="title"
              required
              aria-describedby="title-help"
              value={title}
              onChange={onChangeUpdatedPostForm}
            />
            <Form.Text id="title-help" className="" muted>
              Required
            </Form.Text>
          </Form.Group>
          <Form.Group className="mt-4">
            <Form.Control
              as="textarea"
              rows={3}
              title="text"
              placeholder="Description"
              name="description"
              value={description}
              onChange={onChangeUpdatedPostForm}
            />
          </Form.Group>
          <Form.Group className="mt-4">
            <Form.Control
              title="text"
              placeholder="Tutorial URL"
              name="url"
              value={url}
              onChange={onChangeUpdatedPostForm}
            />
          </Form.Group>
          <Form.Group className="mt-4">
            <Form.Control
              as="select"
              value={status}
              name="status"
              onChange={onChangeUpdatedPostForm}
            >
              <option value="TO LEARN">TO LEARN</option>
              <option value="LEARNING">LEARNING</option>
              <option value="LEARNED">LEARNED</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>Cancel</Button>
          <Button variant="primary" type="submit">
            LearnIt!
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdatePostModal;
