const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");

function prev(){

      let inName = document.getElementById("inName").value;
      let inBirth = document.getElementById("inBirth").value;
      let inField = document.getElementById("inField").value;
     

      const name = document.getElementById("name");
      const birth = document.getElementById("birth");
      const fieldYear = document.getElementById("fieldYear");
      

      name.innerHTML = inName;
      birth.innerHTML = inBirth;
      fieldYear.innerHTML = inField;
    
      ctx.fillStyle = "#159";
      ctx.rect(0, 0, 300, 56);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.fillText("GENERATED ID CARD", 50, 25);
      ctx.font = "16px Arial";
      ctx.fillStyle = "#000";
      ctx.fillText(name.innerHTML, 110, 90);
      ctx.fillText(birth.innerHTML, 110, 115);
      ctx.fillText(fieldYear.innerHTML, 110, 140);
      ctx.drawImage(image, 10, 65, 80, 110);
}

function loadImage(event) {
  const image = document.getElementById("imgDisplayed");
  image.src = URL.createObjectURL(event.target.files[0]);
}

