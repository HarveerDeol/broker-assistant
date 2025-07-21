const ClassifyBox = () => {
return(<>
<h1>Classification</h1>
<form>
<div>
    <label htmlFor='productdescription'>Product description</label><br/>
    <textarea name='productdescription' placeholder="Input description here"></textarea>
</div>
<button type='submit'>classify</button>
</form>
</>)
}

export default ClassifyBox;