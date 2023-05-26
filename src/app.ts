// import axios from 'axios';
// import { WebClient } from '@slack/web-api';
import { RTMClient } from '@slack/rtm-api';

// const slack = new WebClient('xoxb-5321610536389-5322689886101-cAVLN3JVurMroz3ov69EKTCm');
const rtm = new RTMClient('xoxb-5321610536389-5322689886101-cAVLN3JVurMroz3ov69EKTCm');

rtm.on('ready', async () => {
    console.log('bot started')
})
