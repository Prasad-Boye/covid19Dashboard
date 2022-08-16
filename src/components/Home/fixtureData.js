const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390543/CovidDashBoard/andaman_ntg6sc.svg',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390748/CovidDashBoard/ap_uqmvrp.svg',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390549/CovidDashBoard/arp_t4gowr.svg',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390550/CovidDashBoard/assam_vhj8px.svg',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390552/CovidDashBoard/bh_ov88n5.svg',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390544/CovidDashBoard/chandigarh_vsdl01.svg',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390546/CovidDashBoard/chattisgarh_au2vjs.svg',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390541/CovidDashBoard/DDU_q2nity.svg',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390540/CovidDashBoard/dl_buchpz.svg',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390550/CovidDashBoard/goa_jzflqz.svg',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390553/CovidDashBoard/gj_hrjcvq.svg',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390555/CovidDashBoard/hr_zm0x9e.svg',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390541/CovidDashBoard/HP_zrrfsu.svg',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390543/CovidDashBoard/jammu_s0zpsg.svg',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390547/CovidDashBoard/jh_qhd5kj.svg',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390545/CovidDashBoard/ka_nlfgut.svg',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390544/CovidDashBoard/kl_pq6ky0.svg',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390540/CovidDashBoard/ladakh_fxzexy.svg',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390541/CovidDashBoard/lksdwp_jairqo.svg',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390544/CovidDashBoard/mh_gh71ll.svg',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390553/CovidDashBoard/mp_dsneck.svg',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390551/CovidDashBoard/manipur_smrkvb.svg',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390551/CovidDashBoard/manipur_smrkvb.svg',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390553/CovidDashBoard/mz_fetalj.svg',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390553/CovidDashBoard/mz_fetalj.svg',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390546/CovidDashBoard/odissa_yxtmnk.svg',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390540/CovidDashBoard/pudicherry_swfypa.svg',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390555/CovidDashBoard/punjab_ksfhle.svg',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390554/CovidDashBoard/rj_ssnvhk.svg',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390547/CovidDashBoard/sikkim_dkkx3q.svg',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390544/CovidDashBoard/tn_rxztk3.svg',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390546/CovidDashBoard/tg_iojciy.svg',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390547/CovidDashBoard/tripura_aogcyc.svg',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390553/CovidDashBoard/up_o71u5c.svg',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390555/CovidDashBoard/uk_j4azmr.svg',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
    map_url:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660390549/CovidDashBoard/wb_i5vei7.svg',
  },
]

const covidSelectCardData = [
  {
    id: 'CONFIRMED',
    text: 'Confirmed',
    imageUrl:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660025593/CovidDashBoard/check-mark_1_vo7q2u.svg',
    altText: 'country wide confirmed cases pic',
    testId: 'countryWideConfirmedCases',
  },
  {
    id: 'ACTIVE',
    text: 'Active',
    imageUrl:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660061829/CovidDashBoard/protection_1_ednd75.svg',
    altText: 'country wide active cases pic',
    testId: 'countryWideActiveCases',
  },
  {
    id: 'RECOVERED',
    text: 'Recovered',
    imageUrl:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660062117/CovidDashBoard/recovered_1_wamwqi.svg',
    altText: 'country wide recovered cases pic',
    testId: 'countryWideRecoveredCases',
  },
  {
    id: 'DECEASED',
    text: 'Deceased',
    imageUrl:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660062193/CovidDashBoard/breathing_1_wwz6aa.svg',
    altText: 'country wide deceased cases pic',
    testId: 'countryWideDeceasedCases',
  },
]

export default statesList
export {covidSelectCardData}
