function Save(){
    return(
        <div className="load-save">
            <form className="d-flex justify-content-end">
                <input id='id' type="text" className="form-control me-2"/>
                <button type="button" id="load" className="btn btn-outline-dark me-2">Load</button>
                <button type="button" id="save" className="btn btn-outline-dark">Save</button>
            </form>
        </div>
    );
}
export default Save;