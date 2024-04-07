
import React from "react";
import { Text, SelectBox, Img, Heading, Button, Input } from "../../components";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import Table from "../../components/Table/Table"
import './Analytics.css';

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AnalyticsPage() {
  const [collapsed, setCollapsed] = React.useState(false);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("pageviewsone", {
        cell: (info) => (
          <div className="flex flex-wrap">
            <Text as="p" className="self-start !text-[10.83px]">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="ml-8 text-right !text-[10.83px]">
              872,337
            </Text>
            <Text as="p" className="ml-[9px] self-start text-right !text-[10.83px] !text-gray-500">
              (15.82%)
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            as="p"
            className="pb-[35px] pr-[23px] pt-px text-right !text-[10.83px] !text-blue_gray-900 sm:pb-5 sm:pr-5"
          >
            Pageviews
          </Text>
        ),
        meta: { width: "256px" },
      }),
      tableColumnHelper.accessor("unique", {
        cell: (info) => (
          <div className="flex flex-wrap items-start gap-[9px]">
            <Text as="p" className="my-[3px] text-right !text-[10.83px]">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="mt-0.5 text-right !text-[10.83px] !text-gray-500">
              (15.33%)
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[35px] pt-px text-right !text-[10.83px] !text-blue_gray-900 sm:pb-5">
            Unique pageviews
          </Text>
        ),
        meta: { width: "120px" },
      }),
      tableColumnHelper.accessor("avgtimeon", {
        cell: (info) => (
          <div className="flex flex-wrap items-start gap-[27px]">
            <Text as="p" className="mb-[7px] mt-1.5 text-right !text-[10.83px]">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="text-right !text-[10.83px]">
              802,873
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[35px] pt-px text-right !text-[10.83px] !text-blue_gray-900 sm:pb-5">
            Avg. time on page
          </Text>
        ),
        meta: { width: "171px" },
      }),
      tableColumnHelper.accessor("rowextrances", {
        cell: (info) => (
          <div className="flex flex-1 flex-wrap justify-between gap-5 md:self-stretch">
            <Text as="p" className="self-start text-right !text-[10.83px] !text-gray-500">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="mr-6 self-start text-right !text-[10.83px]">
              25.96%
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 flex-wrap items-start justify-between gap-5 pb-8 pr-8 md:self-stretch sm:pb-5 sm:pr-5">
            <Text as="p" className="text-right !text-[10.83px] !text-blue_gray-900">
              Extrances
            </Text>
            <Text as="p" className="mb-[13px] text-right !text-[10.83px] !text-blue_gray-900">
              % Exit
            </Text>
          </div>
        ),
        meta: { width: "183px" },
      }),
      tableColumnHelper.accessor("pagevalue", {
        cell: (info) => (
          <div className="flex flex-wrap items-start gap-[18px]">
            <Text as="p" className="my-1 text-right !text-[10.83px]">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="mt-1 text-right !text-[10.83px] !text-gray-500">
              (5.11%)
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            as="p"
            className="pb-[35px] pl-[30px] pt-px text-right !text-[10.83px] !text-blue_gray-900 sm:pb-5 sm:pl-5"
          >
            Page value
          </Text>
        ),
        meta: { width: "110px" },
      }),
    ];
  }, []);

  //use this function to collapse/expand the sidebar
  function collapseSidebar() {
     setCollapsed(!collapsed)
  }

  return (
    <>
      
      <div className="w-full bg-white-A700_01">
        <div className="bg-white-A700_01">
          <div className="bg-white-A700_01 shadow-xs">
            <div className="rounded-[17px] bg-gray-50 px-[15px] pt-[15px]">
              <div>
                <div className="flex items-start gap-9 md:flex-col">
                  <Sidebar
                    width="287px !important"
                    collapsedWidth="80px !important"
                    collapsed={collapsed}
                    className="!sticky top-0 flex h-screen flex-col gap-[26px] overflow-auto rounded-[35px] bg-blue_gray-700 p-6 shadow-sm md:hidden sm:p-5"
                  >
                    <Button size="lg" shape="square" className="mt-[11px] w-[40px] -mr-10">
                      <Img src="images/img_arrow_right.svg" />
                    </Button>
                    <Menu
                      menuItemStyles={{
                        button: {
                          padding: 0,
                          gap: "15px",
                          color: "#ffffff",
                          fontWeight: 400,
                          fontSize: "17.78px",
                          textAlign: "center",
                          borderRadius: "17px",
                          paddingLeft: "22px",
                          paddingRight: "22px",
                          [`&:hover, &.ps-active`]: { backgroundColor: "#539bbb !important", borderRadius: "17.78px" },
                        },
                      }}
                      rootStyles={{ ["&>ul"]: { gap: "65.00px" } }}
                      className="mb-[7px] flex w-full flex-col self-stretch"
                    >
                      <MenuItem
                        icon={<Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[40px] w-[40px]" />}
                      >
                       <h1 className="text-2xl">Catalix</h1> 
                        
                      </MenuItem>
                      <MenuItem icon={<Img src="images/img_home.svg" alt="home_one" className="h-[20px] w-[21px]" />}>
                        Home
                      </MenuItem>
                      <MenuItem icon={<Img src="images/img_clock.svg" alt="clock_one" className="h-[20px] w-[21px]" />}>
                        Activities
                      </MenuItem>
                      <MenuItem icon={<Img src="images/img_user.svg" alt="user_one" className="h-[20px] w-[21px]" />}>
                        Analytics
                      </MenuItem>
                      <MenuItem
                        icon={
                          <Img
                            src="images/img_iconex_light_rocket.svg"
                            alt="iconexlight_one"
                            className="h-[20px] w-[21px]"
                          />
                        }
                      >
                        Transformation
                      </MenuItem>
                      <MenuItem
                        icon={<Img src="images/img_settings.svg" alt="settings_one" className="h-[20px] w-[21px]" />}
                      >
                        Library
                      </MenuItem>
                      <MenuItem
                        icon={<Img src="images/img_search.svg" alt="search_one" className="h-[20px] w-[21px]" />}
                      >
                        Settings
                      </MenuItem>
                      <MenuItem
                        icon={<Img src="images/img_upload.svg" alt="upload_one" className="h-[20px] w-[21px]" />}
                      >
                        Logout
                      </MenuItem>
                    </Menu>
                  </Sidebar>
                  <div className="mt-[17px] flex flex-1 flex-col items-end gap-[27px] md:self-stretch">
                    <header className="flex w-[92%] items-center justify-between gap-5 md:w-full sm:flex-col">
                      <div className="w-[49%] self-start rounded-tl-sm rounded-tr-sm sm:w-full">
                        <div className="relative z-[1] flex items-center justify-center rounded-tl-sm rounded-tr-sm sm:flex-col">
                        
                          <div className="search flex items-center ">
                          <Button size="xs" shape="circle" className="mb-0.5 w-[24px] self-end !rounded-[12px]">
                            <Img src="images/img_search_teal_300.svg" />
                          </Button>
                              <input  aria-label="search" type="search" placeholder="Search" />
                              <Button size="xs" shape="circle" className="w-[24px] !rounded-[12px]">
                                  <Img src="images/img_search_teal_300_24x24.svg" />
                                </Button>
                          </div>
                         
                        </div>
                       
                      </div>
                      <div className="flex w-[21%] items-center justify-center gap-[13px] self-end sm:w-full">
                        <Button color="white_A700_01" size="sm" variant="fill" className="w-[31px] rounded-[10px]">
                          <Img src="images/img_thumbs_up_blue_gray_700.svg" />
                        </Button>
                        <Button
                          color="white_A700_01"
                          size="sm"
                          variant="fill"
                          className="w-[31px] rounded-[10px] !shadow-lg"
                        >
                          <Img src="images/img_settings_blue_gray_700.svg" />
                        </Button>
                        <Button color="white_A700_01" size="sm" variant="fill" className="w-[31px] rounded-[10px]">
                          <Img src="images/img_search_blue_gray_700.svg" />
                        </Button>
                        <Img
                          src="images/img_ellipse_49.png"
                          alt="circleimage"
                          className="h-[41px] w-[41px] rounded-[50%]"
                        />
                      </div>
                    </header>
                    <div className="flex flex-col gap-[27px] self-stretch">
                      <div className="flex gap-[9px] md:flex-col">
                        <Input
                          shape="round"
                          name="button_one"
                          placeholder={`Create Report`}
                          prefix={<Img src="images/img_plus.svg" alt="plus" className="h-[17px] w-[17px]" />}
                          className="w-[21%] md:w-full sm:pr-5"
                        />
                        <Button
                          shape="round"
                          className="w-full flex-1 font-medium !text-blue_gray-700 md:self-stretch sm:px-5"
                        >
                          Share this dashboard
                        </Button>
                        <Button shape="round" className="min-w-[183px] font-medium sm:px-5">
                          Select Duration
                        </Button>
                        <Button shape="round" className="w-full flex-1 font-medium md:self-stretch sm:px-5">
                          Compare with Duration
                        </Button>
                      </div>
                      <div className="flex flex-col gap-[27px]">
                        <div className="flex gap-[22px] md:flex-col">
                          <Img
                            src="images/img_quotation.svg"
                            alt="quotation_one"
                            className="h-[134px] w-[23%] rounded-[10px] md:w-full"
                          />
                          <Img
                            src="images/img_quotation_orange_a200.svg"
                            alt="quotation_one"
                            className="h-[134px] w-[23%] rounded-[10px] md:w-full"
                          />
                          <Img
                            src="images/img_quotation_white_a700_01.svg"
                            alt="quotation_one"
                            className="h-[134px] w-[23%] rounded-[10px] md:w-full"
                          />
                          <Img
                            src="images/img_quotation_red_a200.svg"
                            alt="quotation_one"
                            className="h-[134px] w-[23%] rounded-[10px] md:w-full"
                          />
                        </div>
                        <div className="flex gap-2.5 md:flex-col">
                          <div className="flex w-full flex-col items-end rounded-[10px] bg-white-A700_01 p-[21px] shadow-xl sm:p-5">
                            <div className="relative z-[4] mr-2.5 mt-1.5 h-[15px] w-[15px] rounded-[7px] bg-green-A700 md:mr-0" />
                            <div className="relative mt-[-3px] flex self-start pb-[7px]">
                              <Heading size="s" as="h1">
                                On Time
                              </Heading>
                            </div>
                            <div className="mr-2.5 mt-1 flex flex-wrap justify-between gap-5 self-stretch md:mr-0">
                              <Text size="md" as="p" className="self-end !text-[15.13px] !text-black-900">
                                Completed Iteratiions
                              </Text>
                              <Heading as="h2" className="self-start text-right !text-[15.13px]">
                                7
                              </Heading>
                            </div>
                            <div className="mr-2.5 flex flex-wrap justify-between gap-5 self-stretch md:mr-0">
                              <Text size="md" as="p" className="!text-[15.13px] !text-black-900">
                                Total Iterations
                              </Text>
                              <Heading as="h3" className="text-right !text-[15.13px]">
                                9
                              </Heading>
                            </div>
                            <div className="mb-5 mr-2.5 mt-0.5 flex flex-wrap justify-between gap-5 self-stretch md:mr-0">
                              <Text size="md" as="p" className="!text-[15.13px] !text-black-900">
                                % Iterations Done
                              </Text>
                              <Heading as="h4" className="text-right !text-[15.13px]">
                                77.8%
                              </Heading>
                            </div>
                          </div>
                          <div className="flex w-full flex-col items-end rounded-[10px] bg-white-A700_01 p-[21px] shadow-xl sm:p-5">
                            <div className="relative z-[5] mr-2.5 mt-1.5 h-[15px] w-[15px] rounded-[7px] bg-green-A700 md:mr-0" />
                            <div className="relative mt-[-1px] flex self-start pb-[7px]">
                              <Heading size="s" as="h5">
                                On Scope
                              </Heading>
                            </div>
                            <div className="mr-2.5 mt-0.5 flex flex-wrap justify-between gap-5 self-stretch md:mr-0">
                              <Text size="md" as="p" className="self-end !text-[15.13px] !text-black-900">
                                Story Points Done
                              </Text>
                              <Heading as="h6" className="self-start text-right !text-[15.13px]">
                                3200
                              </Heading>
                            </div>
                            <div className="mr-2.5 flex flex-wrap justify-between gap-5 self-stretch md:mr-0">
                              <Text size="md" as="p" className="self-end !text-[15.13px] !text-black-900">
                                Total Story Points
                              </Text>
                              <Heading as="p" className="self-start text-right !text-[15.13px]">
                                4230
                              </Heading>
                            </div>
                            <div className="mb-5 mr-2.5 flex flex-wrap justify-between gap-5 self-stretch md:mr-0">
                              <Text size="md" as="p" className="!text-[15.13px] !text-black-900">
                                % Stories Done
                              </Text>
                              <Heading as="p" className="text-right !text-[15.13px]">
                                70.9%
                              </Heading>
                            </div>
                          </div>
                          <div className="flex w-full flex-col items-end rounded-[10px] bg-white-A700_01 p-[21px] shadow-xl sm:p-5">
                            <div className="mr-2.5 mt-1.5 h-[15px] w-[15px] rounded-[7px] bg-deep_orange-300 md:mr-0" />
                            <div className="mt-2.5 flex self-start pb-[7px]">
                              <Heading size="s" as="h6">
                                On Velocity
                              </Heading>
                            </div>
                            <div className="mr-2.5 mt-0.5 flex flex-wrap justify-between gap-5 self-stretch md:mr-0">
                              <Text size="md" as="p" className="self-end !text-[15.13px] !text-black-900">
                                Average Velocity
                              </Text>
                              <Heading as="p" className="self-start text-right !text-[15.13px]">
                                428.6
                              </Heading>
                            </div>
                            <div className="mb-[31px] mr-2.5 flex flex-wrap justify-between gap-5 self-stretch md:mr-0">
                              <Text size="md" as="p" className="self-end !text-[15.13px] !text-black-900">
                                Required Velocity
                              </Text>
                              <Heading as="p" className="self-start text-right !text-[15.13px]">
                                615.0
                              </Heading>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-[363px] flex-col items-center rounded-[10px] bg-[url(/public/images/img_pageviews_table.svg)] bg-cover bg-no-repeat md:h-auto">
                          <div className="mt-2 flex w-[96%] items-center justify-between gap-5 md:w-full md:p-5 sm:flex-col">
                            <SelectBox
                              shape="square"
                              indicator={
                                <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[7px] w-[7px]" />
                              }
                              name="pageviews"
                              placeholder={`Pageviews`}
                              options={dropDownOptions}
                              className="w-[9%] gap-px font-medium uppercase tracking-[0.39px] text-blue_gray-900 sm:w-full"
                            />
                            <div className="flex w-[54%] justify-center gap-[7px] sm:w-full sm:flex-col">
                              <div className="flex h-[23px] flex-wrap items-center rounded-[3px] bg-[url(/public/images/img_period.svg)] bg-cover bg-no-repeat px-[9px] md:h-auto">
                                <Text as="p" className="ml-[17px] text-center !text-[10.83px]">
                                  Today
                                </Text>
                                <Text as="p" className="ml-[17px] text-center !text-[10.83px]">
                                  Yesterday
                                </Text>
                                <Text as="p" className="ml-[17px] text-center !text-[10.83px]">
                                  Week
                                </Text>
                                <Text
                                  as="p"
                                  className="ml-[9px] flex h-[23px] items-center justify-center border border-solid border-blue-A200_7f bg-blue-200_7f px-2.5 py-[3px] text-center !text-[10.83px]"
                                >
                                  Month
                                </Text>
                                <Text as="p" className="ml-[17px] text-center !text-[10.83px]">
                                  Quarter
                                </Text>
                                <Text as="p" className="ml-[19px] text-center !text-[10.83px]">
                                  Year
                                </Text>
                              </div>
                              <SelectBox
                                size="sm"
                                shape="round"
                                indicator={
                                  <Img
                                    src="images/img_checkmark_gray_500.svg"
                                    alt="checkmark"
                                    className="h-[7px] w-[7px]"
                                  />
                                }
                                name="placeholder"
                                placeholder={`Select period`}
                                options={dropDownOptions}
                                className="w-[24%] gap-px border border-solid border-blue_gray-100 font-medium sm:w-full sm:pr-5"
                              />
                            </div>
                          </div>
                          <div className="mt-2.5 h-px self-stretch bg-blue_gray-100" />
                        
                          <div>
                            <Table/>
                               </div>
                          
                          <div className="mt-[9px] h-px w-[96%] bg-blue_gray-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
