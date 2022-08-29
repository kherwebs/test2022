import React from "react";

import {
  Stack,
  Column,
  Text,
  List,
  Img,
  Row,
  Line,
  Button,
  Input,
} from "components";

const LauncherPage = () => {
  function handleNavigate1() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate2() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[3369px] xl:h-[3854px] 2xl:h-[4335px] 3xl:h-[5201px] mx-[auto] w-[100%]">
        <Stack className="absolute bottom-[0] lg:h-[3536px] xl:h-[4044px] 2xl:h-[4549px] 3xl:h-[5458px] w-[100%]">
          <Stack className="absolute bottom-[0] lg:h-[2601px] xl:h-[2975px] 2xl:h-[3347px] 3xl:h-[4015px] w-[100%]">
            <Column className="absolute items-center w-[100%]">
              <Column
                className="bg-cover bg-repeat justify-end lg:py-[111px] xl:py-[127px] 2xl:py-[143px] 3xl:py-[171px] w-[100%]"
                style={{ backgroundImage: "url('images/img_hero.png')" }}
              >
                <Text className="font-semibold lg:leading-[44px] xl:leading-[51px] 2xl:leading-[57px] 3xl:leading-[69px] lg:mt-[289px] xl:mt-[331px] 2xl:mt-[372px] 3xl:mt-[447px] mx-[auto] lg:text-[32px] xl:text-[37px] 2xl:text-[42px] 3xl:text-[50px] text-center text-white_A700 tracking-ls1 w-[37%]">
                  <span className="text-white_A700 font-poppins">
                    Your Best Partner
                    <br />
                    To Create{" "}
                  </span>
                  <span className="text-gray_900 font-poppins">
                    Back-end Apps
                  </span>
                </Text>
                <Text className="bg-clip-text bg-gradient  font-semibold lg:ml-[517px] xl:ml-[591px] 2xl:ml-[665px] 3xl:ml-[798px] lg:mr-[352px] xl:mr-[403px] 2xl:mr-[453px] 3xl:mr-[544px] lg:text-[32px] xl:text-[37px] 2xl:text-[42px] 3xl:text-[50px] text-transparent tracking-ls1 w-[auto]">
                  Back-end Apps
                </Text>
                <Text className="font-medium leading-[normal] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] mx-[auto] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_300 text-center w-[34%]">
                  Save thousands to millions of bucks by using single tool for
                  different
                  <br />
                  type of amazing and great useful admin well done projectsе
                </Text>
                <List
                  className="font-roboto xl:gap-[11px] 2xl:gap-[12px] 3xl:gap-[14px] lg:gap-[9px] grid grid-cols-4 min-h-[auto] lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] mx-[auto] w-[56%]"
                  orientation="horizontal"
                >
                  <Column
                    className="bg-cover bg-repeat lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] items-center justify-center lg:px-[31px] xl:px-[35px] 2xl:px-[40px] 3xl:px-[48px] rounded-radius30 w-[100%]"
                    style={{ backgroundImage: "url('images/img_item1.svg')" }}
                  >
                    <Text className="font-medium lg:mt-[20px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-teal_500 w-[auto]">
                      Loved by
                    </Text>
                    <Text className="font-bold lg:mb-[17px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-white_A700 tracking-ls1 w-[auto]">
                      90,000+
                    </Text>
                  </Column>
                  <Column
                    className="bg-cover bg-repeat lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] items-center justify-center lg:px-[36px] xl:px-[41px] 2xl:px-[47px] 3xl:px-[56px] rounded-radius30 w-[100%]"
                    style={{ backgroundImage: "url('images/img_item1.svg')" }}
                  >
                    <Text className="font-medium lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-teal_500 w-[auto]">
                      5 Star Ratings
                    </Text>
                    <Text className="font-bold lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-white_A700 tracking-ls1 w-[auto]">
                      7,000+
                    </Text>
                  </Column>
                  <Column
                    className="bg-cover bg-repeat lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] items-center justify-center lg:px-[37px] xl:px-[42px] 2xl:px-[48px] 3xl:px-[57px] rounded-radius30 w-[100%]"
                    style={{ backgroundImage: "url('images/img_item1.svg')" }}
                  >
                    <Text className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-teal_500 w-[auto]">
                      End Users
                    </Text>
                    <Text className="font-bold lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-white_A700 tracking-ls1 w-[auto]">
                      100M+
                    </Text>
                  </Column>
                  <Column
                    className="bg-cover bg-repeat lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] items-center justify-center lg:px-[28px] xl:px-[32px] 2xl:px-[36px] 3xl:px-[43px] rounded-radius30 w-[100%]"
                    style={{ backgroundImage: "url('images/img_item1.svg')" }}
                  >
                    <Text className="font-medium lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-teal_500 w-[auto]">
                      On The Market
                    </Text>
                    <Text className="font-bold lg:mb-[23px] xl:mb-[26px] 2xl:mb-[29px] 3xl:mb-[35px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-white_A700 tracking-ls1 w-[auto]">
                      10 Years
                    </Text>
                  </Column>
                </List>
                <Img
                  src="images/img_customers.svg"
                  className="lg:h-[40px] xl:h-[46px] 2xl:h-[51px] 3xl:h-[62px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] mx-[auto] w-[70%]"
                  alt="Customers"
                />
                <Stack className="lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] lg:mt-[59px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[92px] w-[100%]">
                  <Stack className="absolute bottom-[0] lg:h-[204px] xl:h-[233px] 2xl:h-[262px] 3xl:h-[314px] w-[100%]">
                    <Stack className="absolute bottom-[0] lg:h-[189px] xl:h-[216px] 2xl:h-[243px] 3xl:h-[291px] w-[100%]">
                      <Stack className="absolute bottom-[0] lg:h-[174px] xl:h-[199px] 2xl:h-[223px] 3xl:h-[268px] w-[100%]">
                        <Row className="absolute bottom-[0] justify-between w-[100%]">
                          <Img
                            src="images/img_keen1.png"
                            className="lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] rounded-radius12 w-[6%]"
                            alt="KeenOne"
                          />
                          <Img
                            src="images/img_redux.png"
                            className="lg:h-[159px] xl:h-[182px] 2xl:h-[204px] 3xl:h-[245px] rounded-bl-[12px] rounded-br-[12px] rounded-tl-[0] rounded-tr-[12px] w-[6%]"
                            alt="Redux"
                          />
                        </Row>
                        <Img
                          src="images/img_metronic3.png"
                          className="absolute lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] right-[6%] rounded-radius12 top-[0] lg:w-[149px] xl:w-[170px] 2xl:w-[192px] 3xl:w-[230px]"
                          alt="MetronicThree"
                        />
                        <Img
                          src="images/img_metronic2.png"
                          className="absolute lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] left-[5%] rounded-radius12 top-[0] lg:w-[149px] xl:w-[170px] 2xl:w-[192px] 3xl:w-[230px]"
                          alt="MetronicTwo"
                        />
                      </Stack>
                      <Img
                        src="images/img_start.png"
                        className="absolute lg:h-[160px] xl:h-[182px] 2xl:h-[205px] 3xl:h-[246px] right-[18%] rounded-radius12 top-[0] w-[13%]"
                        alt="Start"
                      />
                      <Img
                        src="images/img_saul.png"
                        className="absolute lg:h-[180px] xl:h-[206px] 2xl:h-[232px] 3xl:h-[278px] left-[18%] rounded-radius12 top-[0] w-[13%]"
                        alt="Saul"
                      />
                    </Stack>
                    <Img
                      src="images/img_keen2.png"
                      className="absolute lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] right-[31%] rounded-radius12 top-[0] lg:w-[149px] xl:w-[170px] 2xl:w-[192px] 3xl:w-[230px]"
                      alt="KeenTwo"
                    />
                    <Img
                      src="images/img_craft.png"
                      className="absolute lg:h-[158px] xl:h-[181px] 2xl:h-[203px] 3xl:h-[244px] left-[30%] rounded-radius12 top-[0] w-[13%]"
                      alt="Craft"
                    />
                  </Stack>
                  <Img
                    src="images/img_metronic1.png"
                    className="absolute lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] inset-x-[0] mx-[auto] rounded-radius12 top-[0] lg:w-[149px] xl:w-[170px] 2xl:w-[192px] 3xl:w-[230px]"
                    alt="MetronicOne"
                  />
                </Stack>
              </Column>
              <Stack className="lg:h-[1079px] xl:h-[1234px] 2xl:h-[1388px] 3xl:h-[1665px] lg:mt-[325px] xl:mt-[372px] 2xl:mt-[418px] 3xl:mt-[502px] w-[100%]">
                <Img
                  src="images/img_bg.png"
                  className="absolute 2xl:h-[1016px] 3xl:h-[1219px] lg:h-[790px] xl:h-[903px] top-[0] w-[100%]"
                  alt="BG"
                />
                <Column className="absolute bottom-[2%] inset-x-[0] items-center w-[100%]">
                  <Line className="bg-gray_906 h-[1px] w-[100%]" />
                  <Row className="items-end lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[80%]">
                    <Img
                      src="images/img_volume.svg"
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2%]"
                      alt="volume"
                    />
                    <Text className="font-medium font-rubik 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] my-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
                      <span className="text-white_A700">Keen</span>
                      <span className="text-white_A700 font-normal not-italic">
                        Themes
                      </span>
                    </Text>
                    <Text className="font-medium font-poppins 3xl:ml-[1005px] lg:ml-[651px] xl:ml-[744px] 2xl:ml-[837px] my-[4px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                      Docs
                    </Text>
                    <Text className="font-medium font-poppins mb-[3px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                      FAQ
                    </Text>
                    <Text className="font-medium font-poppins lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] my-[4px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                      Licenses
                    </Text>
                  </Row>
                </Column>
                <Row className="absolute bottom-[12%] left-[10%] w-[70%]">
                  <Column className="mt-[3px] w-[62%]">
                    <Column className="bg-gray_907 border border-bluegray_900 border-dashed lg:p-[22px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] rounded-radius12 w-[85%]">
                      <Text className="font-medium ml-[1px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-white_A700 w-[auto]">
                        Would you need a Custom License?
                      </Text>
                      <Text className="font-normal mb-[1px] ml-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-deep_purple_300 w-[auto]">
                        <span className="text-bluegray_600 font-poppins">
                          Email us to
                        </span>
                        <span className="text-deep_purple_300 font-poppins">
                          {" "}
                        </span>
                        <span className="text-bluegray_300 font-poppins">
                          support@keenthemes.com
                        </span>
                      </Text>
                    </Column>
                    <Column className="bg-gray_907 border border-bluegray_900 border-dashed lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:p-[22px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] rounded-radius12 w-[85%]">
                      <Text className="font-medium ml-[1px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-white_A700 w-[auto]">
                        How About a Custom Project?
                      </Text>
                      <Text className="font-normal mb-[1px] ml-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_600 w-[auto]">
                        <span className="text-bluegray_600 font-poppins">
                          Use Our Custom Development Service.{" "}
                        </span>
                        <span className="text-bluegray_300 font-poppins">
                          Click to Get a Quote
                        </span>
                      </Text>
                    </Column>
                  </Column>
                  <Column className="w-[26%]">
                    <Text className="font-semibold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_200 tracking-ls1 w-[auto]">
                      More for Metronic
                    </Text>
                    <Text className="font-medium lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                      FAQ
                    </Text>
                    <Text className="font-medium lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                      Documentaions
                    </Text>
                    <Text className="font-medium lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                      Video Tuts
                    </Text>
                    <Text className="font-medium lg:mt-[20px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                      Changelog
                    </Text>
                    <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                      Github
                    </Text>
                    <Text className="font-medium lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                      Tutorials
                    </Text>
                  </Column>
                  <Column className="mt-[2px] w-[12%]">
                    <Text className="font-semibold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_200 tracking-ls1 w-[auto]">
                      Stay Connected
                    </Text>
                    <Row className="ml-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[81%]">
                      <Button
                        className="common-pointer flex lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] items-center justify-center lg:w-[13px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[20px]"
                        onClick={handleNavigate2}
                        shape="icbRoundedBorder2"
                        size="smIcn"
                        variant="icbFillBlue700"
                      >
                        <Img
                          src="images/img_facebook.svg"
                          className="flex items-center justify-center"
                          alt="facebook"
                        />
                      </Button>
                      <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] mt-[1px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                        Facebook
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[64%]">
                      <Img
                        src="images/img_vector.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[22%]"
                        alt="Vector"
                      />
                      <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] mt-[1px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                        Github
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[64%]">
                      <Img
                        src="images/img_twitter.svg"
                        className="common-pointer lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] w-[22%]"
                        onClick={handleNavigate1}
                        alt="twitter"
                      />
                      <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] mt-[1px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                        Twitter
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[74%]">
                      <Img
                        src="images/img_048dribbble.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[19%]"
                        alt="048dribbble"
                      />
                      <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] mt-[1px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                        Dribbble
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[84%]">
                      <Img
                        src="images/img_youtube3.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] w-[17%]"
                        alt="youtubeThree"
                      />
                      <Text className="font-medium xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 tracking-ls1 w-[auto]">
                        Instagram
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </Stack>
            </Column>
            <Column
              className="absolute bg-cover bg-repeat bottom-[26%] lg:p-[50px] xl:p-[58px] 2xl:p-[65px] 3xl:p-[78px] w-[100%]"
              style={{ backgroundImage: "url('images/img_technologies.svg')" }}
            >
              <Text className="font-semibold lg:leading-[44px] xl:leading-[51px] 2xl:leading-[57px] 3xl:leading-[69px] lg:ml-[262px] xl:ml-[300px] 2xl:ml-[338px] 3xl:ml-[405px] lg:text-[32px] xl:text-[37px] 2xl:text-[42px] 3xl:text-[50px] text-center text-gray_908 tracking-ls1 w-[49%]">
                <span className="text-gray_908 font-poppins">
                  Awesome Tools Used
                  <br />
                  To Create{" "}
                </span>
                <span className="text-white_A700 font-poppins">
                  Worlds’ Best Themes
                </span>
              </Text>
              <Text className="bg-clip-text bg-gradient1  font-semibold lg:ml-[425px] xl:ml-[486px] 2xl:ml-[547px] 3xl:ml-[657px] lg:text-[32px] xl:text-[37px] 2xl:text-[42px] 3xl:text-[50px] text-transparent tracking-ls1 w-[auto]">
                Worlds’ Best Themes
              </Text>
              <Text className="font-medium leading-[normal] lg:ml-[315px] xl:ml-[360px] 2xl:ml-[405px] 3xl:ml-[486px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 text-center w-[38%]">
                Save thousands to millions of bucks by using single tool for
                different
                <br />
                type of amazing and great useful admin well done projectsе
              </Text>
              <Column className="items-center xl:mb-[109px] 2xl:mb-[122px] 3xl:mb-[147px] lg:mb-[95px] 3xl:mt-[101px] lg:mt-[65px] xl:mt-[75px] 2xl:mt-[84px] mx-[auto] w-[88%]">
                <Row className="items-center justify-between w-[100%]">
                  <Button
                    className="flex items-center justify-center text-center w-[19%]"
                    leftIcon={
                      <Img
                        src="images/img_volume_33X42.svg"
                        className="text-center lg:w-[31px] lg:mr-[5px] xl:w-[35px] xl:mr-[6px] 2xl:w-[40px] 2xl:mr-[7px] 3xl:w-[48px] 3xl:mr-[9px]"
                        alt="volume"
                      />
                    }
                    shape="RoundedBorder12"
                    size="xl"
                    variant="OutlineBluegray40026"
                  >
                    <div className="bg-transparent font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      Bootstrap 5
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center text-center w-[19%]"
                    leftIcon={
                      <Img
                        src="images/img_vue9_1.svg"
                        className="text-center lg:w-[27px] lg:mr-[10px] xl:w-[31px] xl:mr-[11px] 2xl:w-[35px] 2xl:mr-[13px] 3xl:w-[42px] 3xl:mr-[16px]"
                        alt="vue-9 1"
                      />
                    }
                    shape="RoundedBorder12"
                    size="xl"
                    variant="FillGray5087"
                  >
                    <div className="bg-transparent font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      VueJS
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center text-center w-[19%]"
                    leftIcon={
                      <Img
                        src="images/img_vector_bluegray_202.svg"
                        className="text-center lg:w-[23px] lg:mr-[8px] xl:w-[27px] xl:mr-[10px] 2xl:w-[30px] 2xl:mr-[11px] 3xl:w-[36px] 3xl:mr-[13px]"
                        alt="Vector"
                      />
                    }
                    shape="RoundedBorder12"
                    size="xl"
                    variant="FillGray5087"
                  >
                    <div className="bg-transparent font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      Laravel
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center text-center w-[19%]"
                    leftIcon={
                      <Img
                        src="images/img_settings.svg"
                        className="text-center lg:w-[32px] lg:mr-[5px] xl:w-[36px] xl:mr-[5px] 2xl:w-[41px] 2xl:mr-[6px] 3xl:w-[49px] 3xl:mr-[8px]"
                        alt="settings"
                      />
                    }
                    shape="RoundedBorder12"
                    size="xl"
                    variant="FillGray5087"
                  >
                    <div className="bg-transparent font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      React
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center text-center w-[19%]"
                    leftIcon={
                      <Img
                        src="images/img_angularicon1.svg"
                        className="text-center lg:w-[23px] lg:mr-[9px] xl:w-[26px] xl:mr-[11px] 2xl:w-[29px] 2xl:mr-[12px] 3xl:w-[35px] 3xl:mr-[14px]"
                        alt="angular-icon-1"
                      />
                    }
                    shape="RoundedBorder12"
                    size="xl"
                    variant="FillGray5087"
                  >
                    <div className="bg-transparent font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      Angular 11
                    </div>
                  </Button>
                </Row>
                <Row className="items-center justify-between lg:mt-[29px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] w-[100%]">
                  <Column className="bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius9 w-[32%]">
                    <Input
                      className="font-medium p-[0] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                      wrapClassName="flex w-[100%]"
                      name="Header"
                      placeholder="Bootstrap 5 - CSS Framework"
                      prefix={
                        <Img
                          src="images/img_volume_33X42.svg"
                          className="lg:w-[26px] lg:ml-[5px] lg:mr-[8px] xl:w-[29px] xl:ml-[5px] xl:mr-[10px] 2xl:w-[33px] 2xl:ml-[6px] 2xl:mr-[11px] 3xl:w-[40px] 3xl:ml-[8px] 3xl:mr-[13px] my-[auto]"
                          alt="volume"
                        />
                      }
                    ></Input>
                    <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[23px] 3xl:leading-[27px] 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 w-[99%]">
                      We’ve been focused on making the from v4 to v5 more
                      approachable but we’ve also not been afraid
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius9 w-[32%]">
                    <Input
                      className="font-medium p-[0] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                      wrapClassName="flex w-[100%]"
                      name="Header One"
                      placeholder="Npm - Software Registry"
                      prefix={
                        <Img
                          src="images/img_contrast.svg"
                          className="ml-[4px] mr-[3px] bg-red_A701 lg:w-[15px] lg:h-[16px] xl:w-[17px] xl:h-[18px] 2xl:w-[20px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] my-[auto]"
                          alt="contrast"
                        />
                      }
                    ></Input>
                    <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[23px] 3xl:leading-[27px] xl:mb-[5px] lg:mb-[5px] 2xl:mb-[6px] 3xl:mb-[8px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 w-[99%]">
                      We’ve been focused on making the from v4 to v5 more
                      approachable but we’ve also not been afraid to step away
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-indigo_50 border-solid lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius9 w-[32%]">
                    <Row className="items-end mt-[1px] w-[82%]">
                      <Img
                        src="images/img_map.svg"
                        className="lg:h-[21px] xl:h-[24px] 2xl:h-[26px] 3xl:h-[32px] mb-[1px] w-[9%]"
                        alt="map"
                      />
                      <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-bluegray_800 w-[auto]">
                        Webpack - Module Builder
                      </Text>
                    </Row>
                    <Line className="bg-indigo_50 h-[1px] ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[99%]" />
                    <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[23px] 3xl:leading-[27px] mb-[4px] ml-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 w-[98%]">
                      We’ve been focused on making the from v4 to v5 more
                      approachable but we’ve also not been afraid to step away
                      from longer
                    </Text>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                  <Column className="bg-white_A700 border border-indigo_50 border-solid lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius9 w-[32%]">
                    <Row className="items-center mt-[1px] w-[70%]">
                      <Img
                        src="images/img_user.svg"
                        className="lg:h-[21px] xl:h-[24px] 2xl:h-[26px] 3xl:h-[32px] w-[15%]"
                        alt="user"
                      />
                      <Text className="font-medium xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-bluegray_800 w-[auto]">
                        Sass - CSS Extension
                      </Text>
                    </Row>
                    <Line className="bg-indigo_50 h-[1px] ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[99%]" />
                    <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[23px] 3xl:leading-[27px] 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] ml-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 w-[98%]">
                      We’ve been focused on making the from v4 to v5 more
                      approachable but we’ve also not been afraid
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-indigo_50 border-solid lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius9 w-[32%]">
                    <Row className="items-end w-[64%]">
                      <Img
                        src="images/img_signal.svg"
                        className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[32px]"
                        alt="signal"
                      />
                      <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-bluegray_800 w-[auto]">
                        Gulp - Task Runner
                      </Text>
                    </Row>
                    <Line className="bg-indigo_50 h-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
                    <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[23px] 3xl:leading-[27px] xl:mb-[5px] lg:mb-[5px] 2xl:mb-[6px] 3xl:mb-[8px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 w-[99%]">
                      We’ve been focused on making the from v4 to v5 more
                      approachable but we’ve also not been afraid to step away
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-indigo_50 border-solid lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius9 w-[32%]">
                    <Row className="items-center mt-[1px] w-[42%]">
                      <Text className="bg-blue_A200 border border-solid border-white_A700 flex font-medium items-center xl:pl-[5px] lg:pl-[5px] 2xl:pl-[6px] 3xl:pl-[8px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[30px]">
                        D
                      </Text>
                      <Text className="font-medium xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-bluegray_800 w-[auto]">
                        Datatables
                      </Text>
                    </Row>
                    <Line className="bg-indigo_50 h-[1px] ml-[2px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]" />
                    <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[23px] 3xl:leading-[27px] lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] ml-[2px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 w-[97%]">
                      We’ve been focused on making the from v4 to v5 more
                      approachable but we’ve also not been afraid to step away
                      from longer
                    </Text>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                  <Column className="bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius9 w-[32%]">
                    <Input
                      className="font-medium p-[0] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                      wrapClassName="flex w-[100%]"
                      name="Header Two"
                      placeholder="Bootstrap 5 Framework"
                      prefix={
                        <Img
                          src="images/img_volume_33X42.svg"
                          className="lg:w-[26px] lg:ml-[5px] lg:mr-[8px] xl:w-[29px] xl:ml-[5px] xl:mr-[10px] 2xl:w-[33px] 2xl:ml-[6px] 2xl:mr-[11px] 3xl:w-[40px] 3xl:ml-[8px] 3xl:mr-[13px] my-[auto]"
                          alt="volume"
                        />
                      }
                    ></Input>
                    <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[23px] 3xl:leading-[27px] 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 w-[99%]">
                      We’ve been focused on making the from v4 to v5 more
                      approachable but we’ve also not been afraid
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-indigo_50 border-solid items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius9 w-[32%]">
                    <Input
                      className="font-medium p-[0] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                      wrapClassName="flex w-[100%]"
                      name="Header Three"
                      placeholder="Npm - Software Registry"
                      prefix={
                        <Img
                          src="images/img_contrast.svg"
                          className="ml-[4px] mr-[3px] bg-red_A701 lg:w-[15px] lg:h-[16px] xl:w-[17px] xl:h-[18px] 2xl:w-[20px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px] my-[auto]"
                          alt="contrast"
                        />
                      }
                    ></Input>
                    <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[23px] 3xl:leading-[27px] xl:mb-[5px] lg:mb-[5px] 2xl:mb-[6px] 3xl:mb-[8px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 w-[99%]">
                      We’ve been focused on making the from v4 to v5 more
                      approachable but we’ve also not been afraid to step away
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-indigo_50 border-solid lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius9 w-[32%]">
                    <Row className="items-end mt-[1px] w-[37%]">
                      <Img
                        src="images/img_map.svg"
                        className="lg:h-[21px] xl:h-[24px] 2xl:h-[26px] 3xl:h-[32px] mb-[1px] w-[19%]"
                        alt="map One"
                      />
                      <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-bluegray_800 w-[auto]">
                        Webpack
                      </Text>
                    </Row>
                    <Line className="bg-indigo_50 h-[1px] ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[99%]" />
                    <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[23px] 3xl:leading-[27px] mb-[4px] ml-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_400 w-[98%]">
                      We’ve been focused on making the from v4 to v5 more
                      approachable but we’ve also not been afraid to step away
                      from longer
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Stack>
          <Row className="absolute bg-gradient2  bottom-[19%] inset-x-[0] items-center mx-[auto] lg:p-[29px] xl:p-[34px] 2xl:p-[38px] 3xl:p-[46px] rounded-radius9 shadow-bs1 w-[80%]">
            <Column className="mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[79%]">
              <Text className="font-semibold lg:text-[22px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px] text-white_A700 w-[auto]">
                <span className="text-white_A700 font-poppins">
                  Start With Metronic Today,{" "}
                </span>
                <span className="text-white_A700 font-poppins font-light">
                  Speed Up Development!
                </span>
              </Text>
              <Text className="font-medium lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_A100 w-[auto]">
                Join over 100,000 Professionals Community to Stay Ahead
              </Text>
            </Column>
            <Button
              className="font-medium lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center w-[20%]"
              size="lg"
              variant="OutlineWhiteA700"
            >
              Purchase on Themeforest
            </Button>
          </Row>
          <Column
            className="absolute bg-cover bg-repeat items-center justify-center lg:p-[37px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] top-[0] w-[100%]"
            style={{ backgroundImage: "url('images/img_demos.svg')" }}
          >
            <List
              className="gap-[0] min-h-[auto] lg:mt-[265px] xl:mt-[304px] 2xl:mt-[341px] 3xl:mt-[410px] w-[100%]"
              orientation="vertical"
            >
              <Row className="justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[100%]">
                <Column className="bg-white_A700 items-center lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius9 shadow-bs2 w-[31%]">
                  <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_801 w-[auto]">
                    <span className="text-bluegray_801 font-poppins">
                      Demo 1{" "}
                    </span>
                    <span className="text-bluegray_300 font-poppins font-medium">
                      - Default Layout
                    </span>
                  </Text>
                  <Row className="items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[77%]">
                    <Button className="font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[15%]">
                      HTML
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[12%]">
                      Vue
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[16%]">
                      React
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[20%]">
                      Angular
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[18%]">
                      Laravel
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[11%]">
                      RTL
                    </Button>
                  </Row>
                  <Column
                    className="bg-cover bg-repeat bg-white_A700 border border-gray_101 border-solid items-end justify-end mb-[2px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] pl-[1px] py-[1px] rounded-radius9 w-[99%]"
                    style={{
                      backgroundImage: "url('images/img_imgcontainer.png')",
                    }}
                  >
                    <Column
                      className="bg-cover bg-repeat items-end justify-end lg:mt-[109px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] w-[41%]"
                      style={{
                        backgroundImage: "url('images/img_group3.png')",
                      }}
                    >
                      <Button
                        className="font-semibold mr-[1px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[50px] 3xl:mt-[61px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[61%]"
                        variant="FillLightblue500"
                      >
                        Dark Mode
                      </Button>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-center lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius9 shadow-bs2 w-[31%]">
                  <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_801 w-[auto]">
                    <span className="text-bluegray_801 font-poppins">
                      Demo 1{" "}
                    </span>
                    <span className="text-bluegray_300 font-poppins font-medium">
                      - Default Layout
                    </span>
                  </Text>
                  <Row className="items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[77%]">
                    <Button className="font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[15%]">
                      HTML
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[12%]">
                      Vue
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[16%]">
                      React
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[20%]">
                      Angular
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[18%]">
                      Laravel
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[11%]">
                      RTL
                    </Button>
                  </Row>
                  <Column
                    className="bg-cover bg-repeat bg-white_A700 border border-gray_101 border-solid items-end justify-end mb-[2px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] pl-[1px] py-[1px] rounded-radius9 w-[99%]"
                    style={{
                      backgroundImage:
                        "url('images/img_imgcontainer_270X400.png')",
                    }}
                  >
                    <Column
                      className="bg-cover bg-repeat items-end justify-end lg:mt-[109px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] w-[41%]"
                      style={{
                        backgroundImage: "url('images/img_group3.png')",
                      }}
                    >
                      <Button
                        className="font-semibold mr-[1px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[50px] 3xl:mt-[61px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[61%]"
                        variant="FillLightblue500"
                      >
                        Dark Mode
                      </Button>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border-bw10 border-solid border-white_A700 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius9 shadow-bs2 w-[31%]">
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Text className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_801 tracking-ls1 w-[auto]">
                      Demo 3
                    </Text>
                    <Column className="bg-gray_102 items-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] rounded-radius4 w-[12%]">
                      <Text className="font-semibold mt-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_600 w-[auto]">
                        HTML
                      </Text>
                    </Column>
                    <Column className="bg-gray_100 items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] rounded-radius4 w-[13%]">
                      <Text className="font-semibold mt-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_600 w-[auto]">
                        React
                      </Text>
                    </Column>
                    <Column className="bg-gray_100 items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] rounded-radius4 w-[14%]">
                      <Text className="font-semibold mt-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_600 w-[auto]">
                        VueJS
                      </Text>
                    </Column>
                    <Column className="bg-gray_100 items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius4 w-[16%]">
                      <Text className="font-semibold mt-[4px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_600 w-[auto]">
                        Angular
                      </Text>
                    </Column>
                    <Column className="bg-gray_100 items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] rounded-radius4 w-[15%]">
                      <Text className="font-semibold mb-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_600 w-[auto]">
                        Laravel
                      </Text>
                    </Column>
                  </Row>
                  <Stack className="bg-white_A700 border border-gray_101 border-solid lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] mb-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius9 w-[100%]">
                    <Img
                      src="images/img_demo102.png"
                      className="absolute lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] rounded-radius9 w-[100%]"
                      alt="Demo102"
                    />
                  </Stack>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[100%]">
                <Column className="bg-white_A700 border-bw10 border-solid border-white_A700 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius9 shadow-bs2 w-[31%]">
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Text className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_801 tracking-ls1 w-[auto]">
                      Demo 4
                    </Text>
                    <Button
                      className="font-semibold lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[12%]"
                      variant="FillGray102"
                    >
                      HTML
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[13%]">
                      React
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[14%]">
                      VueJS
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[16%]">
                      Angular
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[15%]">
                      Laravel
                    </Button>
                  </Row>
                  <Stack className="bg-white_A700 border border-gray_101 border-solid lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] mb-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius9 w-[100%]">
                    <Img
                      src="images/img_metronic2.png"
                      className="absolute lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] rounded-radius9 w-[100%]"
                      alt="DemoSixtyTwo"
                    />
                  </Stack>
                </Column>
                <Column className="bg-white_A700 border-bw10 border-solid border-white_A700 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius9 shadow-bs2 w-[31%]">
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Text className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_801 tracking-ls1 w-[auto]">
                      Demo 5
                    </Text>
                    <Button
                      className="font-semibold lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[12%]"
                      variant="FillGray102"
                    >
                      HTML
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[13%]">
                      React
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[14%]">
                      VueJS
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[16%]">
                      Angular
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[15%]">
                      Laravel
                    </Button>
                  </Row>
                  <Stack className="bg-white_A700 border border-gray_101 border-solid lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] mb-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius9 w-[100%]">
                    <Img
                      src="images/img_demo71.png"
                      className="absolute lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] rounded-radius9 w-[100%]"
                      alt="DemoSeventyOne"
                    />
                  </Stack>
                </Column>
                <Column className="bg-white_A700 border-bw10 border-solid border-white_A700 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius9 shadow-bs2 w-[31%]">
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Text className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_801 tracking-ls1 w-[auto]">
                      Demo 6
                    </Text>
                    <Button
                      className="font-semibold lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[12%]"
                      variant="FillGray102"
                    >
                      HTML
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[13%]">
                      React
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[14%]">
                      VueJS
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[16%]">
                      Angular
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[15%]">
                      Laravel
                    </Button>
                  </Row>
                  <Stack className="bg-white_A700 border border-gray_101 border-solid lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] mb-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius9 w-[100%]">
                    <Img
                      src="images/img_demo51.png"
                      className="absolute lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] rounded-radius9 w-[100%]"
                      alt="DemoFiftyOne"
                    />
                  </Stack>
                </Column>
              </Row>
            </List>
            <Row className="items-center lg:mb-[52px] xl:mb-[59px] 2xl:mb-[67px] 3xl:mb-[80px] lg:mt-[29px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] w-[100%]">
              <List
                className="lg:gap-[29px] xl:gap-[34px] 2xl:gap-[38px] 3xl:gap-[46px] grid grid-cols-2 min-h-[auto] w-[66%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 border-bw10 border-solid border-white_A700 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius9 shadow-bs2 w-[100%]">
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Text className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_801 tracking-ls1 w-[auto]">
                      Demo 7
                    </Text>
                    <Button
                      className="font-semibold lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[44px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[12%]"
                      variant="FillGray102"
                    >
                      HTML
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[13%]">
                      React
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[14%]">
                      VueJS
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[16%]">
                      Angular
                    </Button>
                    <Button className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[15%]">
                      Laravel
                    </Button>
                  </Row>
                  <Stack className="bg-white_A700 border border-gray_101 border-solid lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] mb-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius9 w-[100%]">
                    <Img
                      src="images/img_metronic3.png"
                      className="absolute lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] rounded-radius9 w-[100%]"
                      alt="DemoThirtyTwo"
                    />
                  </Stack>
                </Column>
                <Column className="bg-white_A700 border-bw10 border-solid border-white_A700 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius9 shadow-bs2 w-[100%]">
                  <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Text className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_801 tracking-ls1 w-[auto]">
                      Demo 8
                    </Text>
                    <Button
                      className="font-semibold 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[97px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[12%]"
                      variant="FillGray102"
                    >
                      HTML
                    </Button>
                    <Button
                      className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[13%]"
                      variant="FillGray103"
                    >
                      React
                    </Button>
                    <Button
                      className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[14%]"
                      variant="FillGray104"
                    >
                      VueJS
                    </Button>
                    <Button
                      className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[16%]"
                      variant="FillGray104"
                    >
                      Angular
                    </Button>
                  </Row>
                  <Stack className="bg-white_A700 border border-gray_101 border-solid lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] mb-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius9 w-[100%]">
                    <Img
                      src="images/img_demo81.png"
                      className="absolute lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] rounded-radius9 w-[100%]"
                      alt="DemoEightyOne"
                    />
                  </Stack>
                </Column>
              </List>
              <Column className="bg-white_A700 border-bw10 border-solid border-white_A700 items-center lg:ml-[29px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius9 shadow-bs2 w-[31%]">
                <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
                  <Text className="font-bold mb-[1px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_801 tracking-ls1 w-[auto]">
                    Demo 9
                  </Text>
                  <Text className="font-semibold mt-[4px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-bluegray_204 w-[auto]">
                    Coming Soon
                  </Text>
                </Row>
                <Stack className="bg-white_A700 border border-gray_101 border-solid lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] mb-[1px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] rounded-radius9 w-[100%]">
                  <Img
                    src="images/img_demo41.png"
                    className="absolute lg:h-[202px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[312px] rounded-radius9 w-[100%]"
                    alt="DemoFortyOne"
                  />
                </Stack>
              </Column>
            </Row>
          </Column>
        </Stack>
        <Stack className="absolute font-museosans lg:h-[409px] xl:h-[468px] 2xl:h-[526px] 3xl:h-[631px] top-[0] w-[100%]">
          <Stack className="absolute bottom-[0] lg:h-[466px] xl:h-[533px] 2xl:h-[599px] 3xl:h-[719px] w-[100%]">
            <Img
              src="images/img_vector17.png"
              className="absolute lg:h-[358px] xl:h-[410px] 2xl:h-[461px] 3xl:h-[553px] top-[0] w-[100%]"
              alt="VectorSeventeen"
            />
            <Column
              className="absolute bg-cover bg-repeat items-center justify-end left-[6%] lg:p-[27px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] right-[8%] w-[86%]"
              style={{ backgroundImage: "url('images/img_group4.png')" }}
            >
              <Img
                src="images/img_logom.png"
                className="lg:h-[42px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] 3xl:mt-[116px] lg:mt-[75px] xl:mt-[86px] 2xl:mt-[97px] w-[6%]"
                alt="LogoM"
              />
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] text-white_A700 tracking-ls1 w-[auto]">
                METRONIC
              </Text>
              <Stack className="lg:h-[42px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[58%]">
                <Text className="absolute font-normal lg:leading-[26px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[40px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-center text-white_A700 tracking-ls1 w-[100%]">
                  <span className="text-white_A700 font-museosans lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] tracking-ls1">
                    The World’s #1{" "}
                  </span>
                  <span className="text-gray_907 font-museosans lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] tracking-ls1">
                    Bootstrap 5 HTML,{" "}
                  </span>
                  <span className="text-gray_907 font-museosans lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px]">
                    VueJS
                  </span>
                  <span className="text-gray_907 font-museosans lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] tracking-ls1">
                    , React{" "}
                  </span>
                  <span className="text-gray_907 font-roboto font-medium lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] tracking-ls1">
                    &
                  </span>
                  <span className="text-gray_907 font-museosans lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] tracking-ls1">
                    {" "}
                  </span>
                  <span className="text-gray_907 font-museosans lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px]">
                    Angular 11
                    <br />
                  </span>
                  <span className="text-white_A700 font-museosans lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] tracking-ls1">
                    Admin Dashboard Theme Framework
                  </span>
                </Text>
                <Text className="absolute bg-clip-text bg-gradient3  font-normal right-[0] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-transparent top-[0] tracking-ls1 w-[auto]">
                  <span className="text-green_A700 font-museosans lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] tracking-ls1">
                    Bootstrap 5 HTML,{" "}
                  </span>
                  <span className="text-green_A700 font-museosans lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px]">
                    VueJS
                  </span>
                  <span className="text-green_A700 font-museosans lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] tracking-ls1">
                    , React{" "}
                  </span>
                  <span className="text-green_A700 font-roboto font-medium lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] tracking-ls1">
                    &
                  </span>
                  <span className="text-green_A700 font-museosans lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] tracking-ls1">
                    {" "}
                  </span>
                  <span className="text-green_A700 font-museosans lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px]">
                    Angular 11
                  </span>
                </Text>
              </Stack>
              <Row className="bg-white_A700 font-poppins items-center lg:mb-[58px] xl:mb-[67px] 2xl:mb-[75px] 3xl:mb-[91px] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[68px] lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] rounded-radius9 shadow-bs3 w-[98%]">
                <Button
                  className="font-bold 3xl:ml-[107px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-center tracking-ls1 uppercase w-[11%]"
                  size="lg"
                  variant="FillRed50"
                >
                  Preview
                </Button>
                <Text className="font-bold lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_700 tracking-ls1 uppercase w-[auto]">
                  FAQ
                </Text>
                <Text className="font-bold lg:ml-[58px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_700 tracking-ls1 uppercase w-[auto]">
                  Docs
                </Text>
                <Text className="font-bold lg:ml-[58px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[91px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_700 tracking-ls1 uppercase w-[auto]">
                  Videos
                </Text>
                <Text className="font-bold lg:ml-[58px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_700 tracking-ls1 uppercase w-[auto]">
                  Changelog
                </Text>
                <Text className="font-bold lg:ml-[58px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[91px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_700 tracking-ls1 uppercase w-[auto]">
                  Github
                </Text>
                <Text className="font-bold lg:ml-[58px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_700 tracking-ls1 uppercase w-[auto]">
                  Reviews
                </Text>
              </Row>
            </Column>
          </Stack>
          <header className="absolute font-rubik top-[0] w-[100%]">
            <Stack className="lg:h-[60px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[93px] w-[100%]">
              <Column className="absolute bg-black_900_6a items-center justify-end lg:pt-[58px] xl:pt-[67px] 2xl:pt-[75px] 3xl:pt-[91px] w-[100%]">
                <Line className="bg-white_A700_63 h-[1px] w-[100%]" />
              </Column>
              <Row className="absolute bottom-[0] inset-x-[0] mx-[auto] w-[80%]">
                <Img
                  src="images/img_volume.svg"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] w-[2%]"
                  alt="volume One"
                />
                <Text className="font-medium xl:ml-[5px] lg:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-white_A700 w-[auto]">
                  <span className="text-white_A700 font-rubik">Keen</span>
                  <span className="text-white_A700 font-rubik font-light">
                    Themes
                  </span>
                </Text>
                <Column className="font-poppins lg:ml-[487px] xl:ml-[557px] 2xl:ml-[627px] 3xl:ml-[752px] w-[32%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="cursor-pointer hover:font-semibold font-semibold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_401 w-[auto]">
                      Home
                    </Text>
                    <Text className="cursor-pointer hover:font-semibold font-semibold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] hover:text-bluegray_401 text-white_A700 w-[auto]">
                      Metronic
                    </Text>
                    <Text className="cursor-pointer hover:font-semibold font-semibold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] hover:text-bluegray_401 text-bluegray_402 w-[auto]">
                      Hire Us
                    </Text>
                    <Button
                      className="font-bold xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[27%]"
                      size="md"
                      variant="FillPink500"
                    >
                      Purchase
                    </Button>
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius05 w-[17%]" />
                </Column>
              </Row>
            </Stack>
          </header>
        </Stack>
      </Stack>
    </>
  );
};

export default LauncherPage;
