export default () => (
  <div>
    <form action="http://localhost:8080/products" encType="multipart/form-data" method="post">
      Name: <input type="text" name="name" /><br />
      Category: <input type="text" name="category" /><br />
      productImage: <input type="file" name="productImage" id="productImage" />
      <input type="submit" value="Submit" />
    </form>
  </div>
)