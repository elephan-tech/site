import React from 'react';
import { Title, IonCol, Typography } from '../components';
import { Icon } from '../components';
import { rocketOutline } from 'ionicons/icons';

const Team = () => {

  return (
    <IonCol>
      <Title subtitle={<Icon icon={rocketOutline} />}>About Elephantech.</Title>
      <Typography color="contrast" variant="p">
        We are a group of young professionals with broad experience in diverse areas of IT. The company was founded in June, 2020, but it has been in the works for long before that.<br /><br />
          It all started with a group of friends who knew each other from college and rugby. We all were working in different areas in the IT field, from software engineering to User Experience. We started collaborating and consulting back in 2016 until we formed a network for sharing knowledge and advice one another.  One thing led to another, fast forward to 2020, we thought why not start our own technology company.<br /><br />
          We are very passionate about stakeholder satisfaction. We believe every aspect of a project needs to address all stakeholders, from our clients and their audience to the community we serve.<br /><br />
      </Typography>
    </IonCol>
  );
};

export default Team;
