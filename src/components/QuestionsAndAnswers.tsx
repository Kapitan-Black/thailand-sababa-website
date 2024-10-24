
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";


const QuestionsAndAnswers = () => {
    return (
        <div dir="rtl" className="w-2/4 mx-auto mb-12 space-y-2">
            <h2 className="text-center">כמה שאלות שיכולות לעניין אתכם</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="border-2 rounded-t-xl px-8 py-2 text-lg">
              <p>מהו המטבע הרשמי של תאילנד?</p>
            </AccordionTrigger>
            <AccordionContent className="px-8 py-4 border">
              באט תאילנדי (THB){" "}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="border-2 rounded-t-xl px-8 py-2 text-lg">
              מהי עיר הבירה של תאילנד?
            </AccordionTrigger>
            <AccordionContent className="px-8 py-4 border">
              בנגקוק
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="border-2 rounded-t-xl px-8 py-2 text-lg">
              מהי דת הרוב בתאילנד?
            </AccordionTrigger>
            <AccordionContent className="px-8 py-4 border">
              בודהיזם, עם כ-95% מהאוכלוסייה המאמינים בבודהיזם תרוואדה
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="border-2 rounded-t-xl px-8 py-2 text-lg">
              האם תאילנד מצריכה ויזה לתיירים מישראל?
            </AccordionTrigger>
            <AccordionContent className="px-8 py-4 border">
              לא, ישראלים יכולים לשהות בתאילנד עד 60 יום ללא ויזה.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="border-2 rounded-t-xl px-8 py-2 text-lg">
              מהי המנה הלאומית הפופולרית בתאילנד?
            </AccordionTrigger>
            <AccordionContent className="px-8 py-4 border">
              פאד תאי - מנת אטריות מוקפצת עם טעמים מתוקים, חמוצים וחריפים.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
}

export default QuestionsAndAnswers;