export default () => {
  return (
    <div>
      <form action="http://localhost:8080/user/signup" method="post">
        <input type="text" name="email" id="email" />
        <input type="password" name="password" id="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}