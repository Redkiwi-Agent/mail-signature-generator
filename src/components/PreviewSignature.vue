<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const props = defineProps([
  "name",
  "title",
  "image",
  "imageAlt",
  "phone_1",
  "phone_1_link",
  "phone_2",
  "phone_2_link",
  "extra_text"
]);

const contentToDownload = ref("");

const emit = defineEmits(["contentUpdated"]);

const generateHtml = () => {
  const html = `
    <div dir="ltr">
      <br clear="all" />
      <div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature">
        <div dir="ltr">
          <p class="MsoNormal" style="color: rgb(34, 34, 34); font-family: Times; font-size: medium; line-height: 25pt;">
            <span lang="en-NL" style="font-size: 10pt; font-family: Arial, sans-serif; color: black;">Met vriendelijke groet,<u></u><u></u></span>
          </p>
          <table border="0" cellspacing="0" cellpadding="0" style="color: rgb(34, 34, 34); font-family: Times; font-size: medium;">
            <tbody>
              <tr>
                <td style="padding: 0cm 15pt 0cm 0cm;">
                  <p class="MsoNormal">
                    <span lang="en-NL">
                      <a href="https://www.redkiwi.com/" style="color: rgb(17, 85, 204);" target="_blank">
                        <span lang="en-NL" style="font-size: 10pt; font-family: Arial, sans-serif; color: blue;">
                          <img border="0" width="100" height="100" src="https://www.redkiwi.com/uploads/images/E-mailhandtekeningen/Redkiwi-Emailhandtekening.gif" alt="Redkiwi be distinctive" style="width: 1.0416in; height: 1.0416in;" />
                        </span>
                      </a>
                    </span>
                    <span style="font-size: 10pt; font-family: Arial, sans-serif; color: white;"><u></u><u></u></span>
                  </p>
                </td>
                <td style="padding: 0cm 15pt 0cm 0cm;">
                  <p class="MsoNormal">
                    <span style="font-size: 10pt; font-family: Arial, sans-serif; color: white;">
                      <img border="0" width="100" height="100" src="${props.image}" alt="${props.imageAlt}" style="width: 1.0416in; height: 1.0416in;" />
                    </span>
                    <font color="#888888">
                      <font color="#888888">
                        <span style="font-size: 10pt; font-family: Arial, sans-serif; color: white;"><u></u><u></u></span>
                      </font>
                    </font>
                  </p>
                </td>
                <td style="padding: 0cm;">
                  <p class="MsoNormal" style="line-height: 15pt;">
                    <b>
                      <span style="font-size: 10pt; font-family: Arial, sans-serif; color: rgb(227, 6, 19);">${props.name}</span>
                    </b>
                    <span style="font-size: 10pt; font-family: Arial, sans-serif; color: white;"><br /></span>
                    <span style="font-size: 10pt; font-family: Arial, sans-serif; color: black;">${props.title}<br /></span>
                    <span style="font-size: 10pt; font-family: Arial, sans-serif; color: white;">
                      <a href="${props.phone_1_link}" style="color: rgb(17, 85, 204);" target="_blank">
                        <span style="color: black;">${props.phone_1}</span>
                      </a>
                      ${props.phone_2 && props.phone_2_link ? `
                        <br /><a href="${props.phone_2_link}" style="color: rgb(17, 85, 204);" target="_blank">
                          <span style="color: black;">${props.phone_2}</span>
                        </a>
                      ` : ''}
                      <br /><a href="https://www.google.nl/maps/place/Internetbureau+Redkiwi+Rotterdam/@51.9072659,4.4558251,17z/data=!4m13!1m7!3m6!1s0x47c43491bb8be0c5:0xafe5cb5aa220f636!2sDunantstraat+8,+3024+BC+Rotterdam!3b1!8m2!3d51.9072659!4d4.4580138!3m4!1s0x47c433605b4c7e4b:0x8ec228c22c902c71!8m2!3d51.9072659!4d4.4580138?hl=nl" style="color: rgb(17, 85, 204);" target="_blank">
                        <span style="color: black;">Dunantstraat 8, Rotterdam</span>
                      </a>
                      <br />
                      <a href="https://www.redkiwi.com/" style="color: rgb(17, 85, 204);" target="_blank">
                        <span style="color: black;">Redkiwi.com</span>
                      </a>
                    </span>
                    <span style="font-size: 10pt; font-family: Arial, sans-serif; color: white;"><u></u><u></u></span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          ${props.extra_text ? `<br /><p style="font-size:13px;line-height:20px;color:rgb(127,127,127);font-family:arial"><em>${props.extra_text}</em></p>` : ''}
        </div>
      </div>
    </div>
  `;
  contentToDownload.value = html;
  emit("contentUpdated", html);
};

watch(props, generateHtml, { immediate: true, deep: true });

onMounted(generateHtml);
</script>

<template>
  <div v-html="contentToDownload"></div>

  <pre class="bg-black overflow-x-auto mt-5">
    <code class="text-white">{{ contentToDownload }}</code>
  </pre>
</template>