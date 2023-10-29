

const Modal = (isOpened) => {

console.log(isOpened)

    return (
        <div>
            {
                isOpened ?
                    <div className="modal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus aliquam architecto illum tempore nemo delectus ut deleniti,
                        sapiente placeat quae quasi repellat pariatur culpa quisquam laboriosam
                        unde totam! Ad, aliquam.
                    </div>
                    :
                    <div>caca</div>
            }
        </div>


    )
}

export default Modal;


