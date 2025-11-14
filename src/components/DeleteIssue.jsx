import React from 'react'

const DeleteIssue = ({ issueId, onDelete }) => {
  const modalId = `delete_modal_${issueId}`

  return (
    <div>
      <button
        className="btn button-bg"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        Delete Issue
      </button>

      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <h3 className="font-semibold text-xl text-center py-2">Are you sure?</h3>
          <p className="text-sm">
            Once you delete this issue, you will never be able to restore it.
          </p>

          <div className="modal-action flex justify-between">
            <form method="dialog">
              <button className="btn bg-color text-white">Cancel</button>
            </form>

            {/* delete button */}
            <button
              className="btn bg-red-500 text-white"
              onClick={() => onDelete(issueId)}
            >
              Yes
            </button>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default DeleteIssue
