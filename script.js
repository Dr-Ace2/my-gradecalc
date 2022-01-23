let ids = [];

let percent = document.getElementById("percent");
let percentmark = document.getElementById("percentmark");
let grade = document.getElementById("grade");
let grademark = document.getElementById("grademark");
let butt = document.getElementById("butt");
let but = document.getElementById("but");
let maths = document.getElementById("maths");
let english = document.getElementById("english");
let physics = document.getElementById("physics");
let chemistry = document.getElementById("chemistry");
let pass = document.getElementById("pass");
let set = document.getElementById("set");
let add = document.getElementById("add");

let a;
let b;
let c;
let d;
let marksobt = 0;
let total;
let calcuAns;


function runit() {
  a = Number(maths.value);
  b = Number(english.value);
  c = Number(physics.value);
  d = Number(chemistry.value);

  const values = [a, b, c, d];

  for (let i = 0; i < ids.length; i += 1) {
    const id = ids[i];
    const element = document.getElementById(id);
    const value = Number(element.value);
    console.log(value)
    values.push(value);
  }

  console.log(values)

  // values: [a,b,c,d, other1, other2.... ]

  for (let i = 0; i < values.length; i += 1) {
    if (isNaN(values[i])) {
      alert('Invalid input, check your inputx')
      return true
    }

    if (values[i] > 100) {
      alert('Max score is 100, please check and try again')
      return true
    }
  }


  for (let i = 0; i < values.length; i++) {
    marksobt += values[i]
  }

  total = values.length * 100;
  calcuAns = (marksobt / total) * 100;

  marksobt = 0;



  // if (calcuAns === 70 || calcuAns > 70) {
  if (calcuAns >= 70) {
    percent.innerHTML = "Your percentage is:";
    percentmark.innerHTML = calcuAns + "%";
    grade.innerHTML = "Your grade is"
    grademark.innerHTML = "A";
    pass.innerHTML = "Congratulations you passed!";
    return false;

  } else if (calcuAns >= 60 && calcuAns < 70) { // 60, 61.... before 70
    percent.innerHTML = "Your percentage is:";
    percentmark.innerHTML = calcuAns + "%";
    grade.innerHTML = "Your grade is:"
    grademark.innerHTML = "B";
    pass.innerHTML = "Congratulations you passed!";
  }
  else if (calcuAns >= 50 && calcuAns < 60) { // 50, 51, 52... before 60 (59.9, 59.95...)
    percent.innerHTML = "Your percentage is:";
    percentmark.innerHTML = calcuAns + "%";
    grade.innerHTML = "Your grade is:"
    grademark.innerHTML = "C";
    pass.innerHTML = "Congratulations you passed!";
  }
  else if (calcuAns >= 40 && calcuAns < 50) {
    percent.innerHTML = "Your percentage is:";
    percentmark.innerHTML = calcuAns + "%";
    grade.innerHTML = "Your grade is:"
    grademark.innerHTML = "D";
    pass.innerHTML = "Congratulations you passed!";
  }
  else if (calcuAns >= 30 && calcuAns < 40) {
    percent.innerHTML = "Your percentage is:";
    percentmark.innerHTML = calcuAns + "%";
    grade.innerHTML = "Your grade is:"
    grademark.innerHTML = "E";
    pass.innerHTML = "Sorry, you failed";
  }
  else if (calcuAns <= 30) { // 0,1 .... before 30 (eg 29)
    percent.innerHTML = "Your percentage is:";
    percentmark.innerHTML = calcuAns + "%";
    grade.innerHTML = "Your grade is:"
    grademark.innerHTML = "F";
    pass.innerHTML = "Sorry, you failed";
  }


  else {
    percent.innerHTML = "your percentage is:";
    percentmark.innerHTML = calcuAns + "%";
    grade.innerHTML = "your grade is"
    grademark.innerHTML = "F";
    pass.innerHTML = "Sorry, you failed";
    ids = [];
    return true;
  }

  ids = [];
  return false;
}

function addNew() {
  const id = String(Date.now());
  // const label = prompt('Enter name of course')
  but.insertAdjacentHTML('beforebegin', `
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter score" id=${id}>
  </div > `
  )

  ids.push(id);
}

but.addEventListener("click", runit);
add.addEventListener('click', addNew);

function reset() {
  maths.value = "";
  english.value = "";
  physics.value = "";
  chemistry.value = "";

  percent.innerHTML = "";
  percentmark.innerHTML = "";
  grade.innerHTML = ""
  grademark.innerHTML = "";
  pass.innerHTML = "";
}
set.addEventListener("click", reset)

