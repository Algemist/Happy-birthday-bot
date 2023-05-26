import { WebClient } from '@slack/web-api';
import { getHappyBirthdayInfo } from "./api/getHappyBirthdayInfo";
import { prepareEmployeeInfo } from "./helpers/prepareEmployeeInfo";
import { ACCESS_SLACK_TOKEN } from "./consts";

const slack = new WebClient(ACCESS_SLACK_TOKEN);

async function sendNotifications() {
   try {
       const data = await getHappyBirthdayInfo();

       if (data.length === 0) {
           console.log("Не пришла информация с апи");
           return;
       }

       for (const value of data) {
           const supervisorSlackId = await getSlackIdByEmail(value.rukovoditel);

           if (!supervisorSlackId) {
               return;
           }

           if (value.sotrudniki.length === 0) {
               console.log(`У руководителя ${value.rukovoditel} нету сотрудников, у которых сегодня день рождения`);
               return;
           }

           const text = prepareEmployeeInfo(value.sotrudniki);

           await slack.chat.postMessage({
               channel: supervisorSlackId,
               text: text
           })

       }
   } catch (error) {
       console.log(error);
   }
}

export async function getSlackIdByEmail(email: string): Promise<string | null> {
    const data = await slack.users.lookupByEmail({
        email,
    });

    if (data.user && data.user.id) {
        return data.user.id;
    }

    return null;
}

// Отсчитывает 24 часа с момента запуска скрипта.
// Можно сделать реализацию отправки уведомлений в конкретное время

setInterval(sendNotifications, 24 * 60 * 60 * 1000);
