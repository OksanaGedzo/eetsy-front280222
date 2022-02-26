<template>
  <div>
    <div>
      <main>
        <section class="relative w-full h-full py-40 min-h-screen-75">
          <div
              class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-cover"
              :style="`background-image: url('https://viraito.ee/wp-content/uploads/2019/11/banner01-2048x798.jpg');`"
          ></div>
          <router-view />
          <footer-small absolute />
        </section>
      </main>
    </div>

    <section class="pt-20 pb-48" >
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4" >
            <h2 class="text-4xl font-semibold">Here are our heroes</h2>
            <p class="text-lg leading-relaxed m-4 text-blueGray-500">
              According to the National Oceanic and Atmospheric
              Administration, Ted, Scambos, NSIDClead scentist, puts the
              potentially record maximum.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap"  >
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" >
            <div class="px-6" v-for="subCategory in subGroupObjects">
              <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://lh3.googleusercontent.com/5rWgBQiz1hhEIFs4z0ThpkQwZzmOE6gQCKAVB7jNnjIV-uMs7tZHnGe_J2vYkUkqKo_o49Ep47M38KPM8kV4OkzhzebQmmOPMzO6AdW92yQ_SCmxM2zd3TXMkro8XphVa-GSEO7I1tcq1c-qHjjsOBI3TlO3_xbfDiq7fR7OD6_BnQzl_SpmXlXqgwo_oydfnOBXKray_QfrPpWfm-vDdzXeCM629heI2Fp9elJ9U2fLByxU0GJEmU8gxLM7PxmntDV3oKSBIHM7yjoI4KFGXwgnDDuu1N51t_qLzQpH6E8KlLUWkGx67wv0UR22Or2t-V_0tHFRWAT3uUYualH8_GMNZsOyc9rBStB1UN7SAx3AB7UVdnuax9ElIxMG133OC4igaAySlPxWQlMTzk6YKinRqtDjzxA8ZSM6g1PbTg3QMPzicweXH1VnGJlXNAd98A1OM63Kowiqsxp1t4SGpxO_Hl5CEbnsK4z0zg-tsmf-wSe8Q2NKVQOClywcKcyoDqvAOneNEF_3JP5x6jivH-K_XSOC5JLnwj3AHBhouk9xnQ2enGpAYKACj1bC5oDrVLFMMO-ZOLKr9boNVRzuzRAfEgcVQLGk0z_fBg7b66L9Inmnxe3C6PsmhmS5STKOvnHz1IX1ZbP38MgqPTcsUN3UMi48bmWcjVDVMjJCfadjuU26c3Z6wXriyFvTaRohG-1bpb6JoE5WlBVkRgXiP2Zo=s903-no?authuser=0"

              />
              <div class="pt-6 text-center"  >
                <h5 class="text-xl font-bold" >For your head</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                  Hats
                </p>
                <!--                {{ this.userId }}-->
                <!--                <div class="gallery">-->
                <!--                  <div class="gallery-panel" v-for="category in primaryGroupObjects"-->
                <!--                       v-on:click="redirectToSubgroupPageWith(category.id)">-->
                <!--                    <img src="..\assets\logo.png">-->
                <!--                    {{ category.name }}-->
                <!--                  </div>-->
                <!--                </div>-->
                <div class="mt-6" >
                  <div class="py-6 px-3 mt-32 sm:mt-0" >
                    <button class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"

                            v-on:click="redirectToItemsPageWith(subCategory.name)">
                      <!--                      {{ category.name }}-->
                      <!--&lt;!&ndash;                        type="button"&ndash;&gt;-->
                      <!--                    >-->
                      Shop now

                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://lh3.googleusercontent.com/IVT5N9l16z909WmRmsR9eWt94vcImQHIs2llW6UuO--LhZsgHThvJ4mI3cOEm3_xj5PTfyV3Y6407jfiT9ANzTMRS2adduhYiCOBsxid3WXMgVt6wloNuqaEU40RTM9jLw3Ng6Uw-0v8M6t5CeRcoD2m9saGODBQTaM09KmxdS8F6xnVcDNZ9hBXBUzJnzXZknChkX3AEuxzFL_zRYq_3-k5Qffh3xcKRfnRM8UcWHtymqSw5rLs_FAgtZr-13KNUy0q_G3vC29QZ8nGVxH-fFhKN6bbfmohtJZvsM1FM4u3Otaa9kgjoqwtYsHSX74UYlAHXzCgot13moQG1rlLFTrVPa386e-NjLk-6WkL4G-XHPdx5jSAPZ1hJrN5NCW8xbUyzE1iWzSjQhRu3GSHvanFiYIfuAWY7iHSZIPAQArMBACrEC-vxxd0Z4xICt1ekLuDNK9LxdOcRqEB6yrUcj3TkxVxkF73nh7wLMYhDB6jbYqhj2NCC0ox003SCzrHDF8OHsRCzR2v8BggK05odXiJYwEKVodtiBF0-_P7TnDt44H1r9ZbFIOqZHZIdKn7mT3XeCab-iRIM9dzzFw7miVjCn03jC6UVYH86SEzPR7taMKYcGRkxoeQWRof8r78be-7s2KMxA9YP2GsrffWwm9WFE0VOxBwOwI4nvavvFh6X4uchuNsjpopFq8KL3lJCdTO1wamXd92_V9rkC5JrQ_3=s903-no?authuser=0"

              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">For your feet</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                  Socks
                </p>
                <div class="mt-6">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                        class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                    >
                      Shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://lh3.googleusercontent.com/PWaFcC95ae0HEMDMFRmPT5Yyp_23rkdxI3aVTF_Mgjys6jS-I8vp6GAbfspOGPAsQrr7g2I22mhOUIXIuD2sL6lYkjVkVRXV-c9MCkVPVyaPAb1EYllQ2Ypp5_8UJEahi80d0SrIofhgKdJxK_SsDynWKysnLNG8HJP6Xrldplz-iDuYyriuVJXPnFxBi27qJCKOP-inlojQT4NgNqjtTigUdpk3uSfZtSoYxzFcXThdCbYvc_owuZcBbwYC7ATfb2h1KXWjsJjYJWKBRgi2usrggfuMthU9TkUSfvwHeQXDQ58tsn8hy8d7Fg1iLtbkmTKic36gQWbRqqt6sccq0iSRsv-GsjvqCSzDXD4NlVnNffku2x0rzQDpeCFP9U3RNPogksGNGNT9fajOtuNs8FvCBONBGR99a9z-tQf32Uflab1vPY9zInQiTnguVJr9Wg50dkAiafHELFDAcD9ooC0elcsxdJsjOZaZ1uGtMAdDq7AnrHv6JhUS0t-IXG8LRBh1bPSQmmF_xVOZGieiObx2Vusq8EopeVa2XRwqcBpvVCl234TpfqdDDfU3CtTD7WTR08F4uLNMlDosIFR3v3AytInEkajoI78T7RsZ3IaJQn_hE6J9EjqheHV7A2MI4JlFv02T1i7mWMxlsk1rOgejoGUKO9LHYhSFGVpEC_tyn8JaFH628My1Txz05GHRw8gF-GQc450Mrnh7tbTM_EYy=s903-no?authuser=0"

              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">For your hands</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                  Gloves
                </p>
                <div class="mt-6">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                        class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                    >
                      Shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://lh3.googleusercontent.com/fife/AAWUweWFEaI-yb8M0sg8VWbqEjEG-5glutZIC-ahUJviJk11ORJ8T28pfGuBcvPGinlSiFVrFb1MjlgrL9Zbm0ECy4EGepAk_NOMxHWfqEwqjmCjeqOFeWXEaQtXv2pYjeC_ouoOTGDE_8nQq8HBqRKfogzOsFRm1hE-PhFqlK1TJlnXFpoVrS-78tYzkTvBxDhOH9rISmBV8_zz84knJBUbDA5rhZAS5ml2R1G-fROSVMpYQeK09yqkwGNkJ-KCAKasO_2BvqqfJa0RiTDJdzUbl_dmoUocVB5DdV-C1JEM4SiFbkSnH8pXff8tNi0E1ety1xFFjc7eHGZ4e9aWyI1XAUFE8-_sIuMZPiOgBTy8l_b2dp6bEBQiXzdywZ_WMiblIWXEYVW2zs2BHTa2SwpZ7Q0mLFMTpsgM0tYKecgm35KR4mPefwhHLDwGxP3a7Fs8u241GRNEzw7WqFH2W_8U8dEqueV8u45TCrMx7Hc_LEqJgq4FK9ZLRx74wi3WwUE6GeAZdO_ibiLdP7N_LhiMKtcxAcG1rKhOy7gz1fw3-xS6S-4h-gpC-G5NvGcc9FrINBjlWR_eRAs0yfrdk9i-CcDgkntswlnDswc8RHG_Y2qcWaYlm-ArrTRG58lhSmbecazgrvC0K7XGYasViEyMHRgO1-s_zEv8y39vmiSTTezGHhsPeWlTsJ2AS_uHLNSOW7nDa9SzGDOIOAPniby7ixSV2JywgctBSgnIGYC4RTNnvxiWqEeQQ1jXGlj9Y6QLnPf_KQ9TWmkDL_y2D5gbNAPgNFSWjuapr7qRsTgINGX1y7IBpHBdoxPO4Bk8ZzH1qp0plvEAJejaaCrnl6v5ijx4kuN3FpF93JP0lCAvjFAdBLjVSH2AKgzbdxJggd4r4z82dIs2s6wvMXvNVxsrZ5UYGAeftrSRuwqAVAvhNXWnlVBWRLRzLVH2rbzToRKblkwbwk_kPjvAFaXCpa7OgG0R9304Y5y9qoy-H4IqwFj9-NlD-v8Upn2P26XsRzHW4WJ-O1YRkcveQGaox6J71xdtQhXNfkTEgtWlM8bX4ygJd31LuV2pqhE-r10nbSglGfKrePsWTjWlQS8Y1NQx6YX9C2AS-AS71BdOG1rs__wp5d5eEKBALQHMr5lqtD29V_AElMbYVtUm7IKmMOLZPb9L3OV0ApG2aN205bRCpbZFlfDeTuCDPfq3CJUVtmfRdUL8f8FGExheDgxcjLZuCdUCW5fjfV7qKjK6PLm5iHsIi_nMyiNl3WCWFqlU7b7Y1YcjYAArH5ftlHfypjLr4zr8fQA-xrHGDm5-32bOOnRuZjgT-IHXUHY6bwsWG1tUEUc-qUFB1tYd1wfxIDf4eD7t2r_StPH4pBXxP3SISQqUvn5IpzSe2Jzkg4l4oTqV1iBqXpgPBpZ9dB5-pVIoRiIvK1uFkZEFxMenJR52QTv7Z05h6kzLcvolAv8cwOvNMhnWAv5jMpBjhhzcKhEd-IZxz0bIfSptuyrJuC07BnQjJjO5CxX5TABxV4VfVYww0Osj9ney4_0RzNFq1t2AymtpmGtPkrZ3YI83pxvmmt-IiSW64ys2iyzNHXYlkJrQoXEe6CHq5tH2JqD9bVV4j_KHzee5Z3LVHZWFXsj0KqCceT72tndiJyIdQj15RzuSmrpFb-Ljk6eboHOeOTSiBpcTgaOZ9yIvspDnTlenTOHmP_VQC_r3gCLwPT_iEtodIYoDNKKmss7XLDV0v7uhB4Tz3mIQZdamBXKcsc_VMC6R9jB55yGfJcfCjRs4ioVlZKQCKtRwB8PL050BmNzt0QaLRmcapJHr3MI9EYildT560jGBmt6_p_irjsPufB4CqN_wKM0x72Ii-suXQOtPiZF4Pp7jAk9Fwtw5CvT1KpoBRNZPcewYBbZOgidAG5yimh5ZxqEAts7Miu8wJZIqTqEhya0SsFpadkfeEzazVORGW88ZjOdHVALkqXybW6dN6TQFQ3XpCM1ZTb52sdsP6sBbQUOSSCs5BTkvUvpIogyyKxvUWCVN-ghaiqcSocapRU8UbjLk3M3nkR0KIEOXKkitn5DXNKwnObZp7k0kWVGim73pEoA7edKAqfhW5MGXBtzQqOGuz26iTokNlX-lpu92IjZiom_m0MptoMrM4A7w3SXa1EWbxkzzv332nO7DIXJcVjgtrzF_l-qa_2r1LchcLdEpJaW3tjzQRk9U4-TKc1xZfL6da4pZdyi8TEcO8574Xkw93p-87HKayWtgNOoBszqNax6c7CDiVd29Pm90DacLoCRNcChIf6hK9UaXNh2R7jyCSczvxIU2MjVY4MViELNhNsMCMKJzdwqRL6btRca4cuI5NY0XT5J6ha7Cak_9jEreU6UKiKYbBAfZTnPn1-DEA0kEPhznovdbJLzpuN-0DXqaB9iE59Nz1Wi7N3hgfaQLeAXzvd5B1oBDhejX6QBIBolee3dT0lnv42ICyOAI41wCJUE-MoxakUKnL3V5kMFLWLk_o6HS_svoxuHA8tZBVEuqaXCZNdXIeq_rnj-GD20Sp6H852JOtB76JTDR5QyhX7f4PKJXPXh6ggZ2Thr8jZr4eqSkdbE7mhSt6J91elH4ORxGeeF28dCaiRkddeD2VDMXSXhEg9osDexifOjURNiRhe3sO_oP3N4KcV1x5rSdcFWiLrL9WaEeWaC6zO9guz68Lu86wytiu5Wz9yGVSzejKAi3fhSORPEWEI8OieZAUkla5qeNsUkVk2kSkytZ03coV8HZeuo5fZe9u00cqy8XacT8qCNAsZYqEbWr7uvfEN0Ary5WmQyMpvd_6hjzeuxATZLOnwv_grRrinYq7doo-BNPdifwZvTDxZfJU3-Te454oAVz7MNtOTtNC1suWNd5bApuK4pytQlX4Z9r2nla01KOCCEmx62zia3r6Km2593jKYpAT8c-4T-AHk8JntIfehtjK2wA4Ji2INUw4y6_aLmTAm_rjaQBQY1dUuQB_q58uH56pPcyg_hRtqq4AfaDs0qhaCu9NYW6FQJ5lMtLRzeXmOCKPDPnfBqcaHq2-xtO9nVrXcEHPrBN5ov8Lu5Z252N1heOhNGz0JqX4rTzjCiHtrYEdpIxQ01zvuKs7tCHJzRI6S7Hv1R6dvvcYlRlxQYpGAG3pRj-lBaeL_n7yXDwdi3eOKtUqLhHOX5AYsDU9w3Gi8hR3tTRyfkXP3R3uYM5eHZYbmDpMlCngWt10B80nmLMauL5S5TzXdpgdYtH417PIy_9dcv191UXEsiNqxxAw2h_ggYvQqE9yeu3NJxv20yITM0z_KWZr0KFxCbsoqenJIFv_kNWfzc_04tOEg9Lcz5yI---5Rb3oQqfxsz0-cTY-E2o4VuIAPKDjRw7uqXBcTVSpzWLW0u7YdIoxLo2DucitV4D3fbRQRCtDtnjkIXg-G-vzPB4dtZ5aZn0GDBvzu6ZpKnsB3Yp3gaBpONNsPef_9v8l6SQUOsNf7Le8qb5g-e172YLcAurCHE3tZ3NlrLaf1sFOgXzGCFryNd_lUq0z2KFczux3yf3OYV0zSLO_-YJGDAUgULuhBcbYCeyfqSvQvS3xJTAl-piypEGHe0E0DCp9Bwb9gByHleiJOzmkmByJ1czC8RiJXBUZkD5jX3iiA58AY0g-ixeesxV_yX5KdQjpfFHjarMg0zXx95puyGYIXRrGVJvYtj4a3F-Fn60dCLl4FlwyWCrO2NtcheUL9902nYw8JGw57QBjS7r=s903-no?authuser=0"

              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">For your home</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                  Tableware
                </p>
                <div class="mt-6">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                        class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                    >
                      Shop now
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<!--    {{ this.primaryGroupId }}-->

<!--    <div class="gallery">-->
<!--      <div class="gallery-panel" v-for="subCategory in subGroupObjects"-->
<!--           v-on:click="redirectToItemsPageWith(subCategory.name)">-->
<!--        <img src="..\assets\logo.png">-->
<!--        <div class="item-grid">-->
<!--          {{ subCategory.name }}<br>-->

<!--        </div>-->
<!--      </div>-->
<!--    </div>-->






    <footer class="block py-4">
      <div class="container mx-auto px-4">
        <hr class="mb-4 border-b-1 border-blueGray-200" />
        <div
            class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4">
            <div
                class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
            >
              Copyright ©
              <a
                  href="https://github.com/Rairot/eetsy-front"
                  class="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
              >
                MRO Creative Team
              </a>
            </div>
          </div>
          <div class="w-full md:w-8/12 px-4">
            <ul class="flex flex-wrap list-none md:justify-end justify-center">
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  Creative Team
                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  Blog

                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  MRO License

                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style>

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;

}
</style>


<script>
export default {
  name: "Subgroups",
  data: function () {
    return {
      primaryGroupId: this.$route.query.id,
      subGroupObjects: {}
    }
  },
  methods: {
    getAllSubGroupsByPrimaryGroupId: function (primaryGroupId) {
      this.$http.get("/get/subgroups/by/primarygroup/id", {
            params: {
              id: primaryGroupId
            }
          }
      ).then(response => {
        this.subGroupObjects = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    redirectToItemsPageWith: function (subGroupName) {
      this.$router.push({name: 'Itemlist', query: {name: subGroupName}})
    },
  },
  beforeMount() {
    this.getAllSubGroupsByPrimaryGroupId(this.primaryGroupId)
  }
}
</script>

