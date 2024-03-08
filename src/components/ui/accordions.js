import { Accordion, Tabs } from 'flowbite-react';
import { BodyText, LgText } from '@/ui/typography';

/**
 * @description - This is the basic FAQ accordion adopted from Flowbite-react showing one question/answer at a time and collapsing the rest of the panels.
 * @param - the potential prop could be the data file
 */
export const BasicAccordion = () => {
  // the data can be moved to and exported from a data file under utils/ to increase maintenance and organization
  const data = [
    {
      question: 'What are jelly beans?',
      answer:
        'Wafer I love halvah gummies jelly beans chocolate. Tiramisu jelly beans biscuit bear claw apple pie bear claw I love. Croissant tart marshmallow pie fruitcake I love pudding. I love toffee jelly-o soufflé tiramisu caramels liquorice. Oat cake liquorice caramels marzipan sesame snaps sweet roll carrot cake. I love caramels topping halvah shortbread tart oat cake I love fruitcake. Fruitcake wafer danish sweet bonbon. Toffee dessert ice cream danish pastry sweet roll. Cotton candy I love candy cookie cake. Pastry I love lemon drops cupcake pie oat cake. Fruitcake tiramisu chocolate fruitcake caramels soufflé cake. I love I love bonbon chocolate bar chocolate chocolate cake dragée chupa chups pudding. Carrot cake chocolate cake sugar plum I love cake cotton candy. Jelly beans marshmallow ice cream cheesecake croissant apple pie I love oat cake.',
    },
    {
      question: 'How do you make ice cream marshmallows?',
      answer:
        'Bonbon I love chupa chups gummi bears I love cake bear claw. Bonbon pastry gingerbread liquorice candy topping biscuit. Lemon drops halvah gingerbread I love biscuit I love macaroon sweet sugar plum. Candy I love cake pie macaroon lemon drops I love I love sweet. Danish marzipan shortbread biscuit bonbon halvah. Cookie I love soufflé pie pie tart. Sweet macaroon ice cream marshmallow cupcake halvah sweet sweet roll cotton candy. I love carrot cake sweet roll sugar plum sweet roll. Macaroon lollipop powder bear claw chupa chups tart icing oat cake. Chocolate cake sweet bear claw I love donut I love topping. Biscuit shortbread carrot cake brownie carrot cake I love. Candy canes bonbon halvah fruitcake oat cake toffee pie. Sesame snaps pastry candy chocolate cake liquorice I love dessert donut cheesecake.',
    },
    {
      question: 'And how about croissants?',
      answer:
        'Croissant liquorice danish carrot cake I love candy canes tootsie roll. Sugar plum dessert danish caramels icing jelly beans cheesecake jelly. Bonbon danish toffee soufflé danish caramels pie soufflé. Jujubes jelly-o gummies liquorice muffin tiramisu I love. Jelly pastry pudding marshmallow bonbon pudding. Shortbread gummi bears marshmallow jelly cake chocolate cake.',
    },
  ];

  return (
    <Accordion className='border-none'>
      {data.slice(0, 4).map((faq, index) => (
        <Accordion.Panel key={index}>
          <Accordion.Title className='px-0 py-6 bg-white hover:bg-white focus:ring-0 focus:outline-none'>
            <LgText className='font-semibold'>{faq.question}</LgText>
          </Accordion.Title>
          <Accordion.Content className='px-0'>
            <BodyText className='mb-2 text-gray-500'>{faq.answer}</BodyText>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

/**
 * @description - This component combines Flowbite-react's two components (Tabs and Accordion) in order to categorize the questions/answers (accordion) into different categories (tabs). Each tab when clicked will load its own set of questions/answers.
 *
 */
export const TabbedAccordion = () => {
  const data = [
    {
      category: 'Category One',
      listOfFaqs: [
        {
          question: 'What are jelly beans?',
          answer:
            'Wafer I love halvah gummies jelly beans chocolate. Tiramisu jelly beans biscuit bear claw apple pie bear claw I love. Croissant tart marshmallow pie fruitcake I love pudding. I love toffee jelly-o soufflé tiramisu caramels liquorice. Oat cake liquorice caramels marzipan sesame snaps sweet roll carrot cake. I love caramels topping halvah shortbread tart oat cake I love fruitcake. Fruitcake wafer danish sweet bonbon. Toffee dessert ice cream danish pastry sweet roll. Cotton candy I love candy cookie cake. Pastry I love lemon drops cupcake pie oat cake. Fruitcake tiramisu chocolate fruitcake caramels soufflé cake. I love I love bonbon chocolate bar chocolate chocolate cake dragée chupa chups pudding. Carrot cake chocolate cake sugar plum I love cake cotton candy. Jelly beans marshmallow ice cream cheesecake croissant apple pie I love oat cake.',
        },
      ],
    },
    {
      category: 'Category Two',
      listOfFaqs: [
        {
          question: 'How do you make ice cream marshmallows?',
          answer:
            'Bonbon I love chupa chups gummi bears I love cake bear claw. Bonbon pastry gingerbread liquorice candy topping biscuit. Lemon drops halvah gingerbread I love biscuit I love macaroon sweet sugar plum. Candy I love cake pie macaroon lemon drops I love I love sweet. Danish marzipan shortbread biscuit bonbon halvah. Cookie I love soufflé pie pie tart. Sweet macaroon ice cream marshmallow cupcake halvah sweet sweet roll cotton candy. I love carrot cake sweet roll sugar plum sweet roll. Macaroon lollipop powder bear claw chupa chups tart icing oat cake. Chocolate cake sweet bear claw I love donut I love topping. Biscuit shortbread carrot cake brownie carrot cake I love. Candy canes bonbon halvah fruitcake oat cake toffee pie. Sesame snaps pastry candy chocolate cake liquorice I love dessert donut cheesecake.',
        },
        {
          question: 'And how about croissants?',
          answer:
            'Croissant liquorice danish carrot cake I love candy canes tootsie roll. Sugar plum dessert danish caramels icing jelly beans cheesecake jelly. Bonbon danish toffee soufflé danish caramels pie soufflé. Jujubes jelly-o gummies liquorice muffin tiramisu I love. Jelly pastry pudding marshmallow bonbon pudding. Shortbread gummi bears marshmallow jelly cake chocolate cake.',
        },
      ],
    },
  ];
  return (
    <Tabs>
      {data.map((tab, index) => (
        <Tabs.Item
          key={index}
          title={tab.category}>
          {/* Accordion within tabs */}
          <Accordion className='border-none text-left'>
            {tab.listOfFaqs.slice(0, 4).map((faq, index) => (
              <Accordion.Panel key={index}>
                <Accordion.Title className='px-0 py-6 bg-white hover:bg-white focus:ring-0 focus:outline-none'>
                  <LgText className='font-semibold'>{faq.question}</LgText>
                </Accordion.Title>
                <Accordion.Content className='px-0'>
                  <BodyText className='mb-2 text-gray-500'>{faq.answer}</BodyText>
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
        </Tabs.Item>
      ))}
      {/* end of tabs.item */}
    </Tabs>
  );
};
