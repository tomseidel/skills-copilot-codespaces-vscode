function skillsMember()
{
    var member = {
        name: "John Doe",
        age: 34,
        job: "Web Developer",
        sayName: function()
        {
            return this.name;
        }
    };

    document.getElementById("member").innerHTML = member.sayName();
}