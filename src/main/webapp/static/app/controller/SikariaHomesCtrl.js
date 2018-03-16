(function () {
  'use strict';

  angular.module('glaubentekapp')
      .controller('SikariaHomesCtrl', SikariaHomesCtrl);

  /** @ngInject */
  function SikariaHomesCtrl($scope, $http, sikariaHomesService, $window) {
	  new WOW().init();
	  console.log("inside sikaria control");
	  var self = this;	  
	  $scope.mail = {};
	  $scope.mail_content = {};
	  $scope.mail.typeOfRooms="Single Rooms Only";
	  console.log("************",$scope.mail.typeOfRooms);
	  $scope.submitSikariaMail = function(myForm) {
		 
		  console.log("Inside the sikariaHomes ");
		//  console.log("$scope.mail  ::  ",$scope.mail);
		  $scope.mail_content=$scope.mail;
		  $scope.mail={};		  
		  
		  sikariaHomesService.submitSikariaMail( $scope.mail_content).then(
            function(d) {
            	$scope.mail_content = {};            	
            	alert("Mail Sent !! Thanks for contacting us!!");
            	
            	$scope.mail={};
            	$scope.mail.typeOfRooms="Single Rooms Only";
            	$window.location.reload();
            	$window.location.href = "#/sikariaHome";
            },function(errResponse){
              console.error('Error while sendMail sikaria Homes');
            }
	   	 );
		  
	  }	 
	  
	  this.options1 = {
				debug: false,
				baseUrl: "static/images/",
				fields: {
					source: {
						modal: "link",
						image: "medium",
						panel: "thumbnail"
					}
				},
				theme: 'darkblue',
				thumbnail: {
					height: 50,
					index: true,
				},
				modal: {
					caption: {
						visible: true,
						position: 'bottom'
					},
					header: {
						enabled: true,
						dynamic: false
					},
					title: "Glaubentek",
					subtitle: "Images",
					thumbnail: {
						height: 77,
						index: true,
					},
				},
				panel: {
					click: {
						select: false,
						modal: true
					},
					hover: {
						select: true
					},
					item: {
						class: "custom",
						title: false
					},
				},
				image: {
					height: 220,
					click: {
						modal: true
					},
					transition: 'rotateLR',
				},
			};

			this.files1 = [{
				"link": "small_501_NW_Pic_1.jpg",
				"thumbnail": "small_501_NW_Pic_1.jpg",
				"medium": "small_501_NW_Pic_1.jpg",
			}, {
				"link": "small_501_NW_Pic_2.jpg",
				"thumbnail": "small_501_NW_Pic_2.jpg",
				"medium": "small_501_NW_Pic_2.jpg",
			}, {
				"link": "small_501_NW_Pic5.jpg",
				"thumbnail": "small_501_NW_Pic5.jpg",
				"medium": "small_501_NW_Pic5.jpg",
			}, {
				"link": "small_501_NW_Pic6.jpg",
				"thumbnail": "small_501_NW_Pic6.jpg",
				"medium": "small_501_NW_Pic6.jpg",
			}, {
				"link": "small_501_NW_Pic3.jpg",
				"thumbnail": "small_501_NW_Pic3.jpg",
				"medium": "small_501_NW_Pic3.jpg",
			}, ];
			
			
			this.options2 = {
					debug: false,
					baseUrl: "static/images/",
					fields: {
						source: {
							modal: "link",
							image: "medium",
							panel: "thumbnail"
						}
					},
					theme: 'darkblue',
					thumbnail: {
						height: 50,
						index: true,
					},
					modal: {
						caption: {
							visible: true,
							position: 'bottom'
						},
						header: {
							enabled: true,
							dynamic: false
						},
						title: "Glaubentek",
						subtitle: "Images",
						thumbnail: {
							height: 77,
							index: true,
						},
					},
					panel: {
						click: {
							select: false,
							modal: true
						},
						hover: {
							select: true
						},
						item: {
							class: "custom",
							title: false
						},
					},
					image: {
						height: 220,
						click: {
							modal: true
						},
						transition: 'rotateLR',
					},
				};

				this.files2 = [{
					"link": "small_502_NW_Pic_1.jpg",
					"thumbnail": "small_502_NW_Pic_1.jpg",
					"medium": "small_502_NW_Pic_1.jpg",
					
				}, {
					"link": "small_502_NW_Pic3.jpg",
					"thumbnail": "small_502_NW_Pic3.jpg",
					"medium": "small_502_NW_Pic3.jpg",
				}, {
					"link": "small_502_NW_Pic4.jpg",
					"thumbnail": "small_502_NW_Pic4.jpg",
					"medium": "small_502_NW_Pic4.jpg",
				}, {
					"link": "small_502NW_Pic2.jpg",
					"thumbnail": "small_502NW_Pic2.jpg",
					"medium": "small_502NW_Pic2.jpg",
				} ];
				
				this.options3 = {
						debug: false,
						baseUrl: "static/images/",
						fields: {
							source: {
								modal: "link",
								image: "medium",
								panel: "thumbnail"
							}
						},
						theme: 'darkblue',
						thumbnail: {
							height: 50,
							index: true,
						},
						modal: {
							caption: {
								visible: true,
								position: 'bottom'
							},
							header: {
								enabled: true,
								dynamic: false
							},
							title: "Glaubentek",
							subtitle: "Images",
							thumbnail: {
								height: 77,
								index: true,
							},
						},
						panel: {
							click: {
								select: false,
								modal: true
							},
							hover: {
								select: true
							},
							item: {
								class: "custom",
								title: false
							},
						},
						image: {
							height: 220,
							click: {
								modal: true
							},
							transition: 'rotateLR',
						},
					};

					this.files3 = [
						{
							"link": "small_503NW_Pic_1.jpg",
							"thumbnail": "small_503NW_Pic_1.jpg",
							"medium": "small_503NW_Pic_1.jpg",
						},{
						"link": "small_503_NW_Pic_2.jpg",
						"thumbnail": "small_503_NW_Pic_2.jpg",
						"medium": "small_503_NW_Pic_2.jpg",
						
					},  {
						"link": "small_503_NW_Pic4.jpg",
						"thumbnail": "small_503_NW_Pic4.jpg",
						"medium": "small_503_NW_Pic4.jpg",
					} ];
					
					this.options4 = {
							debug: false,
							baseUrl: "static/images/",
							fields: {
								source: {
									modal: "link",
									image: "medium",
									panel: "thumbnail"
								}
							},
							theme: 'darkblue',
							thumbnail: {
								height: 50,
								index: true,
							},
							modal: {
								caption: {
									visible: true,
									position: 'bottom'
								},
								header: {
									enabled: true,
									dynamic: false
								},
								title: "Glaubentek",
								subtitle: "Images",
								thumbnail: {
									height: 77,
									index: true,
								},
							},
							panel: {
								click: {
									select: false,
									modal: true
								},
								hover: {
									select: true
								},
								item: {
									class: "custom",
									title: false
								},
							},
							image: {
								height: 220,
								click: {
									modal: true
								},
								transition: 'rotateLR',
							},
						};

						this.files4 = [
							{
								"link": "small_501SW_Pic_5.jpg",
								"thumbnail": "small_501SW_Pic_5.jpg",
								"medium": "small_501SW_Pic_5.jpg",
							},{
							"link": "small_501_SW_Pic4.jpg",
							"thumbnail": "small_501_SW_Pic4.jpg",
							"medium": "small_501_SW_Pic4.jpg",
							
						}, {
							"link": "small_501SW_Pic_1.jpg",
							"thumbnail": "small_501SW_Pic_1.jpg",
							"medium": "small_501SW_Pic_1.jpg",
						},  {
							"link": "small_501SW_Pic3.jpg",
							"thumbnail": "small_501SW_Pic3.jpg",
							"medium": "small_501SW_Pic3.jpg",
						} ];
						
						this.options5 = {
								debug: false,
								baseUrl: "static/images/",
								fields: {
									source: {
										modal: "link",
										image: "medium",
										panel: "thumbnail"
									}
								},
								/*autoplay: {
							        enabled: true, // slideshow play enabled/disabled
							        delay: 4100 // autoplay delay in millisecond
							    },*/
								theme: 'darkblue',
								thumbnail: {
									height: 50,
									index: true,
								},
								modal: {
									caption: {
										visible: true,
										position: 'bottom'
									},
									header: {
										enabled: true,
										dynamic: false
									},
									title: "Glaubentek",
									subtitle: "Images",
									thumbnail: {
										height: 77,
										index: true,
									},
								},
								panel: {
									click: {
										select: false,
										modal: true
									},
									hover: {
										select: true
									},
									item: {
										class: "custom",
										title: false
									},
								},
								image: {
									height: 220,
									click: {
										modal: true
									},
									transition: 'rotateLR',
								},
							};

							this.files5 = [{
								"link": "small_502SW_Pic_3.jpg",
								"thumbnail": "small_502SW_Pic_3.jpg",
								"medium": "small_502SW_Pic_3.jpg",
								
							}, {
								"link": "small_502SW_Pic4.jpg",
								"thumbnail": "small_502SW_Pic4.jpg",
								"medium": "small_502SW_Pic4.jpg",
							}, {
								"link": "small_502SW_Pic5.jpg",
								"thumbnail": "small_502SW_Pic5.jpg",
								"medium": "small_502SW_Pic5.jpg",
							},  ];
							
							this.options6 = {
									debug: false,
									baseUrl: "static/images/",
									fields: {
										source: {
											modal: "link",
											image: "medium",
											panel: "thumbnail"
										}
									},
									theme: 'darkblue',
									thumbnail: {
										height: 50,
										index: true,
									},
									modal: {
										caption: {
											visible: true,
											position: 'bottom'
										},
										header: {
											enabled: true,
											dynamic: false
										},
										title: "Glaubentek",
										subtitle: "Images",
										thumbnail: {
											height: 77,
											index: true,
										},
									},
									panel: {
										click: {
											select: false,
											modal: true
										},
										hover: {
											select: true
										},
										item: {
											class: "custom",
											title: false
										},
									},
									image: {
										height: 220,
										click: {
											modal: true
										},
										transition: 'rotateLR',
									},
								};

								this.files6 = [{
									"link": "small_503SW_Pic1.jpg",
									"thumbnail": "small_503SW_Pic1.jpg",
									"medium": "small_503SW_Pic1.jpg",
									
								}, {
									"link": "small_503SW_Pic4.jpg",
									"thumbnail": "small_503SW_Pic4.jpg",
									"medium": "small_503SW_Pic4.jpg",
								}, {
									"link": "small_503SWPic5.jpg",
									"thumbnail": "small_503SWPic5.jpg",
									"medium": "small_503SWPic5.jpg",
								},  ];
								
								this.options7 = {
										debug: false,
										baseUrl: "static/images/",
										fields: {
											source: {
												modal: "link",
												image: "medium",
												panel: "thumbnail"
											}
										},
										theme: 'darkblue',
										thumbnail: {
											height: 50,
											index: true,
										},
										modal: {
											caption: {
												visible: true,
												position: 'bottom'
											},
											header: {
												enabled: true,
												dynamic: false
											},
											title: "Glaubentek",
											subtitle: "Images",
											thumbnail: {
												height: 77,
												index: true,
											},
										},
										panel: {
											click: {
												select: false,
												modal: true
											},
											hover: {
												select: true
											},
											item: {
												class: "custom",
												title: false
											},
										},
										image: {
											height: 220,
											click: {
												modal: true
											},
											transition: 'rotateLR',
										},
									};

									this.files7 = [
										{
											"link": "small_504_SW_Pic3.jpg",
											"thumbnail": "small_504_SW_Pic3.jpg",
											"medium": "small_504_SW_Pic3.jpg",
										},
										{
											"link": "small_504_SW_Pic2.jpg",
											"thumbnail": "small_504_SW_Pic2.jpg",
											"medium": "small_504_SW_Pic2.jpg",
										},{
										"link": "small_504_SW_Pic1.jpg",
										"thumbnail": "small_504_SW_Pic1.jpg",
										"medium": "small_504_SW_Pic1.jpg",
										
									},    ];
									
									this.options8 = {
											debug: false,
											baseUrl: "static/images/",
											fields: {
												source: {
													modal: "link",
													image: "medium",
													panel: "thumbnail"
												}
											},
											theme: 'darkblue',
											thumbnail: {
												height: 50,
												index: true,
											},
											modal: {
												caption: {
													visible: true,
													position: 'bottom'
												},
												header: {
													enabled: true,
													dynamic: false
												},
												title: "Glaubentek",
												subtitle: "Images",
												thumbnail: {
													height: 77,
													index: true,
												},
											},
											panel: {
												click: {
													select: false,
													modal: true
												},
												hover: {
													select: true
												},
												item: {
													class: "custom",
													title: false
												},
											},
											image: {
												height: 220,
												click: {
													modal: true
												},
												transition: 'rotateLR',
											},
										};

										this.files8 = [{
											"link": "small_501_SE_Pic_2.jpg",
											"thumbnail": "small_501_SE_Pic_2.jpg",
											"medium": "small_501_SE_Pic_2.jpg",
											
										}, {
											"link": "small_501_SE_Pic5.jpg",
											"thumbnail": "small_501_SE_Pic5.jpg",
											"medium": "small_501_SE_Pic5.jpg",
										},  {
											"link": "small_501SE_Pic3.jpg",
											"thumbnail": "small_501SE_Pic3.jpg",
											"medium": "small_501SE_Pic3.jpg",
										}, ];
										
										this.options9 = {
												debug: false,
												baseUrl: "static/images/",
												fields: {
													source: {
														modal: "link",
														image: "medium",
														panel: "thumbnail"
													}
												},
												theme: 'darkblue',
												thumbnail: {
													height: 50,
													index: true,
												},
												modal: {
													caption: {
														visible: true,
														position: 'bottom'
													},
													header: {
														enabled: true,
														dynamic: false
													},
													title: "Glaubentek",
													subtitle: "Images",
													thumbnail: {
														height: 77,
														index: true,
													},
												},
												panel: {
													click: {
														select: false,
														modal: true
													},
													hover: {
														select: true
													},
													item: {
														class: "custom",
														title: false
													},
												},
												image: {
													height: 220,
													click: {
														modal: true
													},
													transition: 'rotateLR',
												},
											};

											this.files9 = [{
												"link": "small_502SE_Pic1.jpg",
												"thumbnail": "small_502SE_Pic1.jpg",
												"medium": "small_502SE_Pic1.jpg",
												
											}, {
												"link": "small_502SE_Pic2.jpg",
												"thumbnail": "small_502SE_Pic2.jpg",
												"medium": "small_502SE_Pic2.jpg",
											} ];
											
											this.options10 = {
													debug: false,
													baseUrl: "static/images/",
													fields: {
														source: {
															modal: "link",
															image: "medium",
															panel: "thumbnail"
														}
													},
													theme: 'darkblue',
													thumbnail: {
														height: 50,
														index: true,
													},
													modal: {
														caption: {
															visible: true,
															position: 'bottom'
														},
														header: {
															enabled: true,
															dynamic: false
														},
														title: "Room 503SE",
														subtitle: "Images",
														thumbnail: {
															height: 77,
															index: true,
														},
													},
													panel: {
														click: {
															select: false,
															modal: true
														},
														hover: {
															select: true
														},
														item: {
															class: "custom",
															title: false
														},
													},
													image: {
														height: 220,
														click: {
															modal: true
														},
														transition: 'rotateLR',
													},
												};

												this.files10 = [
													{
														"link": "small_503_SE_Pic2.jpg",
														"thumbnail": "small_503_SE_Pic2.jpg",
														"medium": "small_503_SE_Pic2.jpg",
													},
													{
														"link": "small_503_SE_pic1.jpg",
														"thumbnail": "small_503_SE_pic1.jpg",
														"medium": "small_503_SE_pic1.jpg",
														
													}, 
													
													];
												
	  
	 /* $scope.reset = function(myForm) {
		  console.log("inside reset method");
		  myForm$setPristine();
		  myForm.$setUntouched();	     
 	 };*/
  }
})();