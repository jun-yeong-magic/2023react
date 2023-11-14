function Modal({vContent, onClose}){
    return(
      <>
        <div className="modal">
          <div>
              <h3>제목</h3>
              <p>{vContent}</p>
          </div>
          <div className="btnWrap">
            <button onClick={onClose}>닫기</button>
          </div>
        </div>
      </>
    )
  }

export default Modal;