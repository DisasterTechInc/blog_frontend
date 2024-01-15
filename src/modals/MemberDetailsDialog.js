import React from "react";
import Modal from "react-bootstrap/Modal";
import IconLinkedIn from "assets/images/icon__Linkedin.svg";

export const MemberDetailsDialog = ({ show, onClose, data }) => {
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        className="p-0"
      ></Modal.Header>
      <Modal.Body>
        {(data?.avatar && (
          <img
            src={data?.avatar}
            alt={data?.name}
            title={data?.name}
            className="mb-4"
            style={{ height: "270px", width: "auto" }}
          />
        )) ||
          null}
        {(data?.name && <h4 className="mb-1">{data?.name}</h4>) || null}
        {(data?.designation && (
          <p className="weight-700 color-white m-0">{data?.designation}</p>
        )) ||
          null}
        {(data?.bio && (
          <div
            className="mt-4 pt-2"
            dangerouslySetInnerHTML={{ __html: data?.bio }}
          ></div>
        )) ||
          null}
        {(data?.linkedin && (
          <a href={data?.linkedin} target="_blank" rel="noreferrer">
            <img src={IconLinkedIn} alt="" />
          </a>
        )) ||
          null}
      </Modal.Body>
    </Modal>
  );
};
