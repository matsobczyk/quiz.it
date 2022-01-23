import 'survey-react/modern.min.css';
import { StylesManager, Model, Survey } from 'survey-react';
import React from 'react';

StylesManager.applyTheme('bootstrap');

const surveyJson = {
  pages: [
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'civilwar',
          title: 'When was the Civil War?',
          choices: ['1750-1800', '1800-1850', '1850-1900', '1900-1950', 'after 1950'],
        },
      ],
    }, {
      elements: [
        {
          type: 'radiogroup',
          name: 'libertyordeath',
          title: "Who said 'Give me liberty or give me death?'",
          choicesOrder: 'random',
          choices: ['John Hancock', 'James Madison', 'Patrick Henry', 'Samuel Adams'],
        },
      ],
    }, {
      elements: [
        {
          type: 'radiogroup',
          name: 'magnacarta',
          title: 'What is the Magna Carta?',
          choicesOrder: 'random',
          choices: ['The foundation of the British parliamentary system', 'The Great Seal of the monarchs of England', 'The French Declaration of the Rights of Man', 'The charter signed by the Pilgrims on the Mayflower'],
        },
      ],
    },
  ],

};

const survey = new Model(surveyJson);

function MySurvey() {
  return (
    <div className="row">
      <div className="text-center textstyle col-md-3 containerStyle position-absolute top-50 start-50 translate-middle">
        <Survey model={survey} />
      </div>
    </div>
  );
}

export default MySurvey;
