const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };

    setTimeout(updateCount, 400);
  });
}

var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--logo-->
<link rel="icon" type="image/png" sizes="300x250" href="/logomm2.png">
    <meta property="og:image" content="https://mm2playz.secretguard.xyz/img/mm2playz.jpg">
<!-- Primary Meta Tags -->
<meta name="title" content="mm2playz - ban appeal">
<meta name="description" content="discord.gg/mm2playz">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Report a mod</title>
</head>
<body>
    <div class="container py-5">
        <div class="row">
            <div class="col-lg-5 col-md-8 mx-auto shadow border bg-white p-4 rounded">
                <h2 class="text-center fw-bold mb-3">Report An Moderator</h2>

                        <form action="https://docs.google.com/forms/d/e/1FAIpQLSeJv7giducAqY2qa_ifNQO9Ef74GsX8Dnf7NQskVH88NEpUwQ/formResponse"
      target="_self"
      id="bootstrapForm"
      method="POST">
    <fieldset>
    </fieldset>

                        <fieldset>
                            <legend for="1827126926">Your User</legend>
                            <div class="form-group">
                                <p class="help-block">Not needed when reporting anonymously</p>
                                <input id="959291068" type="text" name="entry.959291068" class="form-control" >
                            </div>
                        </fieldset>

                    <!-- Field type: "section" id: "1791237253" -->
    <fieldset>
      <p style="color:rgb(39, 94, 211);"> <legend for="1791237253">Moderators info</legend> </p> 
        <div class="form-group">
        </div>
    </fieldset>
                    <!-- Field type: "short" id: "1680507077" -->
    <fieldset>
        <legend for="1680507077">User+tag</legend>
        <div class="form-group">
            <input id="516313830" type="text" name="entry.516313830" class="form-control" required>
        </div>
    </fieldset>
                    
<!-- Field type: "short" id: "1155235401" -->
<fieldset>
    <legend for="1155235401">ID</legend>
    <div class="form-group">
        <input id="181275833" type="text" name="entry.181275833" class="form-control" required>
    </div>
</fieldset>

                   <!-- Field type: "paragraph" id: "1104939472" -->
    <fieldset>
        <legend for="1104939472">What Happend?</legend>
        <div class="form-group">
            <p class="help-block">Please explain what happened and why your reporting this moderator</p>
            <textarea id="308936315" name="entry.308936315" class="form-control" required></textarea>
        </div>
    </fieldset> 


    <input type="hidden" name="fvv" value="1">
    <input type="hidden" name="fbzx" value="-4475518334054304120">
    <!--
        CAVEAT: In multipages (multisection) forms, *pageHistory* field tells to google what sections we've currently completed.
        This usually starts as "0" for the first page, then "0,1" in the second page... up to "0,1,2..N" in n-th page.
        Keep this in mind if you plan to change this code to recreate any sort of multipage-feature in your exported form.
        We're setting this to the total number of pages in this form because we're sending all fields from all the section together.
    -->
    <input type="hidden" name="pageHistory" value="0,1">

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="font-weight: normal; margin: 0px 0px 15px;">
                        <span class="font" style="font-family:sans-serif">
                            <span class="size" style="font-size: 14px; font-weight: normal; margin: 0px 0px 15px;">
                    <div>
                        <input class="btn btn-primary" type="submit" value="Submit">
                        <button class="btn btn-danger" type="reset">Reset </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js" integrity="sha256-2Pjr1OlpZMY6qesJM68t2v39t+lMLvxwpa8QlRjJroA=" crossorigin="anonymous"></script>
<script>
    $('#bootstrapForm').submit(function (event) {
    event.preventDefault()
    var extraData = {}
    $('#bootstrapForm').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        error: function () {
            // Submit of form should be successful but JSONP callback will fail because Google Forms
            // does not support it, so this is handled as a failure.

            // You can also redirect the user to a custom thank-you page:
            // window.location = 'http://www.mm2playz.xyz/reported124.html'

        }
    })
})
</script>

<style>
    body {
        background-color: rgb(28, 32, 37);
    }

    
</style>

<script type="text/javascript">

if (screen.width >= 699) {
document.location = "https://wwww.mm2playz.xyz/404";
}

</script>
</body>
</html>
