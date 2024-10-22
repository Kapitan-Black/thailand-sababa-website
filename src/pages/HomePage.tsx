import topCardImage1 from "../assets/topCard1.png";
import topCardImage2 from "../assets/topCard2.jpg";
import topCardImage3 from "../assets/topCard3.jpg";

import secondCard1 from "../assets/secondCard1.jpg";
import secondCard2 from "../assets/secondCard2.jpg";
import secondCard3 from "../assets/secondCard3.jpg";
import secondCard4 from "../assets/secondCard4.jpg";

import kosamoi from "../assets/kosamoi.jpg"
import kopangan from "../assets/kopangan.jpg"
import pocket from "../assets/pocket.jpg"
import changmai from "../assets/changmai.jpg";
import kofifi from "../assets/kofifi.jpg"
import krabi from "../assets/krabi.jpg"



import CardTextHover from "@/components/CardTextHover";
import TopCard from "../components/TopCard";
import ContactForm from "@/forms/ContactForm";




const HomePage = () => {
  
  return (
    <div dir="rtl" className="">
      <section className="flex flex-col gap-4">
        <h2 className="text-4xl md:text-5xl text-center font-serif w-[80%] mx-auto">
          תנו לנו לשבור את הראש
        </h2>
        <p className="text-center font-serif text-xl  md:text-2xl w-[70%] mx-auto">
          טיסות בינלאומיות, טיסות פנים, מעברים, מלונות, מלאאא בלאגן. תנו לנו
          לשבור את הראש.
        </p>
      </section>

      <div className="flex md:flex-row flex-col justify-center items-center gap-2 md:gap-6 mt-8 md:px-0 px-4">
        <TopCard
          image={topCardImage3}
          text="בתי מלון/ריזורטים בכל היעדים, בהתאם לרצון הלקוח במחירים ללא תחרות!"
          textPosition="top"
        />
        <TopCard
          image={topCardImage1}
          text="בניית מסלול וחלוקת ימים מקצועית בהתאם לאופי החופשה"
          textPosition="middle"
        />
        <TopCard
          image={topCardImage2}
          text="טיסות בינלאומיות, טיסות פנים,מעברים בתוך תאילנד(מוניות, מעבורות)"
          textPosition="top"
        />
      </div>

      <section className="flex flex-col gap-4 md:gap-8 mt-12">
        <h2 className="text-4xl md:text-5xl font-serif text-center w-[80%] mx-auto ">
          למה כדי לסגור איתנו?
        </h2>
        <p className="text-center text-xl md:text-2xl w-[70%] mx-auto font-serif">
          תאילנד הוא יעד חלומי אך גם מורכב. אנחנו חיים ונושמים את תאילנד, עוסקים
          במקצוע הזה יום ולילה ויודעים להתאים את המסלול הנכון לכל בן אדם באשר
          הוא. אנחנו סוגרים לכם את כל הפינות- טיסות, מלונות, מעברים, אנחנו פה.
          והדבר היפה הוא שזה לא עולה לכם אקסטרה. להיפך, המחירים שלנו זולים יותר
          מכל מחיר שתמצאו אונליין. אז גם חסכתם וגם אתם בראש שקט, אז למה לא?
        </p>
      </section>

      <div className="flex md:flex-row flex-col justify-center gap-2 md:gap-6 mt-8 md:px-0 px-4">
        <TopCard image={secondCard1} text="מומחים בתאילנג" textPosition="top" />
        <TopCard
          image={secondCard2}
          text="ליווי סוכן צמוד"
          textPosition="top"
        />
        <TopCard image={secondCard3} text="מחירים יחודיים" textPosition="top" />
        <TopCard
          image={secondCard4}
          text="קשר אישי עם מלונות"
          textPosition="top"
        />
      </div>

      <h2 className="text-4xl md:text-5xl font-serif text-center w-[80%] mx-auto mt-16" id="hui">
        קצת על החלומות והיעדים
      </h2>

      <div className="flex justify-center flex-col md:flex-row gap-4 mt-16 md:px-0 px-4">
        <CardTextHover
          image={kosamoi}
          title="קוסמוי"
          hoverText="העיר השניה בגודלה בתאילנד, מחוצה לה טבע מרהיב ביופיו, ג׳ונגלים, מפלים, שבטי הרים ועוד."
        />
        <CardTextHover
          image={kopangan}
          title="קופנגן"
          hoverText="העיר השניה בגודלה בתאילנד, מחוצה לה טבע מרהיב ביופיו, ג׳ונגלים, מפלים, שבטי הרים ועוד."
        />
        <CardTextHover
          image={pocket}
          title="פוקט"
          hoverText="העיר השניה בגודלה בתאילנד, מחוצה לה טבע מרהיב ביופיו, ג׳ונגלים, מפלים, שבטי הרים ועוד."
        />
      </div>
      <div className="flex justify-center flex-col md:flex-row gap-4 mt-8 md:px-0 px-4">
        <CardTextHover
          image={changmai}
          title="צ׳אנג מאי"
          hoverText="העיר השניה בגודלה בתאילנד, מחוצה לה טבע מרהיב ביופיו, ג׳ונגלים, מפלים, שבטי הרים ועוד."
        />
        <CardTextHover
          image={kofifi}
          title="קופיפי"
          hoverText="העיר השניה בגודלה בתאילנד, מחוצה לה טבע מרהיב ביופיו, ג׳ונגלים, מפלים, שבטי הרים ועוד."
        />
        <CardTextHover
          image={krabi}
          title="קראבי"
          hoverText="העיר השניה בגודלה בתאילנד, מחוצה לה טבע מרהיב ביופיו, ג׳ונגלים, מפלים, שבטי הרים ועוד."
        />
      </div>

      <ContactForm />

    </div>
  );
};

export default HomePage;
