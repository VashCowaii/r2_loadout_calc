let setsListData = {
  "Tomb Vanguard": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_GraveWalkerTier2_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "DEF",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.25"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "DEF +25%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_GraveWalkerTier2_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Skill Power Modifier",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.08"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Electric Resistance",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.066"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Skill Power Modifier +8%\nElectric Resistance +6.6%"
      }
    },
    "name": "Tomb Vanguard"
  },
  "Battle Aesthetics": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_StunningBeautyTier2_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Skill Critical Hit Damage",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.18"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Skill Critical Hit Rate +18%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_StunningBeautyTier2_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Base Skill Power boost ratio",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.04"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Skill Cost",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "-0.028"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Skill Power +4%\nSkill Cost -2.8%"
      }
    },
    "name": "Battle Aesthetics"
  },
  "Decimator": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_ExecutionerTier2_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Firearm Critical Hit Rate",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.051"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Firearm Critical Hit Rate +5.1%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_ExecutionerTier2_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Weak Point Damage",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.058"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Toxin Resistance",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.066"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Weak Point Damage +5.8%\nToxin Resistance +6.6%"
      }
    },
    "name": "Decimator"
  },
  "Glacial": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_DeadBrideTier2_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Chill Skill Modifier",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.086"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Chill Skill Power Modifier +8.6%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_DeadBrideTier2_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Skill Cost",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "-0.028"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Firearm Critical Hit Rate",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.059"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Skill Cost -2.8%\nFirearm Critical Hit Rate +5.9%"
      }
    },
    "name": "Glacial"
  },
  "Predator": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_DevourTier2_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "HP Recovery Modifier",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.048"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "HP Recovery +4.8%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_DevourTier2_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Toxic Skill Power Boost Ratio",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.072"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Fire Resistance",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.066"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Toxic Skill Power Modifier +7.2%\nFire Resistance +6.6%"
      }
    },
    "name": "Predator"
  },
  "Veteran Marksman": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_PyroManiacTier2_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Firearm Critical Hit Rate",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.051"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Firearm Critical Hit Rate +5.1%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_PyroManiacTier2_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Firearm ATK",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.066"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Weak Point Damage",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.058"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Firearm ATK +6.6%\nWeak Point Damage +5.8%"
      }
    },
    "name": "Veteran Marksman"
  },
  "Swamp Recon": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_SwampWalkerTier2_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Toxic Skill Power Boost Ratio",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.062"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Toxic Skill Power +6.2%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_SwampWalkerTier2_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Outgoing Shield Recovery Modifier",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.12"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Skill Duration UP",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.066"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Firearm Status Effect Trigger Rate +12%\nSkill Duration +6.6%"
      }
    },
    "name": "Swamp Recon"
  },
  "Acrobat": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_HangedManTier2_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Base Skill Power boost ratio",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.017"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Firearm ATK",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.028"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Skill Power +1.7%\nFirearm ATK +2.8%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_HangedManTier2_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Skill Critical Hit Damage",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.059"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Firearm Critical Hit Rate",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.21"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Firearm Critical Hit Rate +21%\nSkill Critical Hit Rate +5.9%"
      }
    },
    "name": "Acrobat"
  },
  "Supernova": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_ExecutionerTier3_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Electric Skill Modifier",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.086"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Electric Skill Power Modifier +8.6%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_ExecutionerTier3_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Executioner.SetOptionAbility_Executioner_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.Hit"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "/Game/Blueprints/Gameplay/Common/Calculation/Damage/CalcSkillDamagePC_New.CalcSkillDamagePC_New_C",
                  "SubPathString": ""
                },
                "Params": [
                  {
                    "Name": "SkillElementalType",
                    "Type": "EM1AbilityParamType::Enum",
                    "Value": "Electricity"
                  }
                ],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::SourceSnapshot",
                    "StatType": "Skill Power",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0"
                  }
                ],
                "QueryTags": []
              }
            },
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Fusion Skill Modifier",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.12"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [
            {
              "Tag": {
                "TagName": "Event.Activate"
              },
              "SpawnAbilityActor": {
                "AbilityActor": {
                  "RowName": "ACCSet_Executioner",
                  "Table": null
                },
                "RemovalPolicy": "EM1AbilityCreatedObjectRemovalPolicy::RemoveWithThisAbility",
                "Params": []
              }
            }
          ],
          "Params": [
            {
              "Name": "AbilityCooltime",
              "Type": "EM1AbilityParamType::Float",
              "Value": "2"
            },
            {
              "Name": "DamageRatio",
              "Type": "EM1AbilityParamType::Float",
              "Value": "1"
            },
            {
              "Name": "ActivateRatio",
              "Type": "EM1AbilityParamType::Float",
              "Value": "0.5"
            }
          ]
        },
        "descKey": "Fusion Skill Power Modifier +12%\nOn Electric Skill Attack upon an enemy activates Executioner's Thunderbolt at the target's location,\ndealing additional Electric damage equivalent to 100% of Skill Power Modifier (Cooldown 2s) at a 50% chance."
      }
    },
    "name": "Supernova"
  },
  "Annihilation": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_DevourerTier3_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Skill Duration UP",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.057"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Skill Duration +5.7%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_DevourerTier3_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Devourer.SetOptionAbility_Devourer_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.Activate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [
                  {
                    "Name": "MaxHPRatioForIncreaseATK",
                    "Type": "EM1AbilityParamType::Float",
                    "Value": "0.26"
                  }
                ],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Firearm ATK",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "/Game/Blueprints/Gameplay/Common/Calculation/Value/DevourerACCHpRatioValue.DevourerACCHpRatioValue_C"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [
            {
              "Tag": {
                "TagName": "Event.Execute"
              },
              "InvokeStatusEffect": {
                "StatusEffect": {
                  "RowName": "StatusEffect_ACCSet_MPRecoveryDownHPRecoveryUP",
                  "Table": null
                },
                "RemovalPolicy": "EM1AbilityCreatedObjectRemovalPolicy::RemoveWithThisAbility",
                "Params": []
              }
            }
          ],
          "SpawnAbilityActors": [],
          "Params": [
            {
              "Name": "MinimumCurrentHPRatio",
              "Type": "EM1AbilityParamType::Float",
              "Value": "0.5"
            },
            {
              "Name": "AbilityCooltime",
              "Type": "EM1AbilityParamType::Float",
              "Value": "30"
            }
          ]
        },
        "descKey": "Firearm ATK increases proportionally to the ratio of Max HP to HP lost, up to +26%\nWhen HP is 50% or lower, MP Recovery -22%, HP Recovery +16.4% for 10s (Cooldown 30s)"
      }
    },
    "name": "Annihilation"
  },
  "Slayer": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_PyromaniacTier3_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Max General Rounds Modifier",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.08"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "General Rounds Capacity +8%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_PyromaniacTier3_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Pyromaniac.SetOptionAbility_Pyromaniac_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.Receive"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Current MP",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "/Game/Blueprints/Gameplay/Common/Calculation/Value/MaxMpBased.MaxMpBased_C"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "EM1StatType::Stat_CurrentCommonGauge",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "/Game/Blueprints/Gameplay/Common/Calculation/Value/MaxCommonGaugeBased.MaxCommonGaugeBased_C"
                  }
                ],
                "QueryTags": []
              }
            },
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Rounds per Magazine",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.09"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Skill Cost",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.15"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Base Skill Power boost ratio",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.261"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": [
            {
              "Name": "RecoveryRatio",
              "Type": "EM1AbilityParamType::Float",
              "Value": "0.17"
            },
            {
              "Name": "RecoveryMpRatio",
              "Type": "EM1AbilityParamType::Float",
              "Value": "0.122"
            }
          ]
        },
        "descKey": "Rounds per Magazine +9%\nSkill Cost +15%\nSkill Power +26.1%\nWhen defeating enemies inflicted with Towed, recovers MP and Specialized Resource by 12.2% at a 17% chance"
      }
    },
    "name": "Slayer"
  },
  "Polar Night": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_DeadbrideTier3_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Chill Skill Power Boost Ratio",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.062"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Chill Skill Power +6.2%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_DeadbrideTier3_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Deadbride.SetOptionAbility_Deadbride_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.Receive"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "/Game/Blueprints/Gameplay/Common/Calculation/Damage/CalcTargetHPRatioDamage.CalcTargetHPRatioDamage_C",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [
            {
              "Tag": {
                "TagName": "Event.Receive"
              },
              "InvokeStatusEffect": {
                "StatusEffect": {
                  "RowName": "StatusEffect_ACCSet_DeadBride",
                  "Table": null
                },
                "RemovalPolicy": "EM1AbilityCreatedObjectRemovalPolicy::RemoveWithThisAbility",
                "Params": []
              }
            }
          ],
          "SpawnAbilityActors": [],
          "Params": [
            {
              "Name": "DamageRadius",
              "Type": "EM1AbilityParamType::Float",
              "Value": "250"
            },
            {
              "Name": "ExplosionRatio",
              "Type": "EM1AbilityParamType::Float",
              "Value": "0.3"
            },
            {
              "Name": "InvokeSERatio",
              "Type": "EM1AbilityParamType::Float",
              "Value": "0.3"
            },
            {
              "Name": "TargetHpBasedDamage",
              "Type": "EM1AbilityParamType::Float",
              "Value": "0.122"
            },
            {
              "Name": "TargetNamedHPBasedDamage",
              "Type": "EM1AbilityParamType::Float",
              "Value": "0.122"
            },
            {
              "Name": "TargetBossHPBasedDamage",
              "Type": "EM1AbilityParamType::Float",
              "Value": "0.122"
            }
          ]
        },
        "descKey": "For each Frostbite stack inflicted upon enemies, Firearm Critical Hit Damage +1.7%, Skill Critical Hit Damage +6% (up to 10 stacks, 5s duration) at a 30% chance.\nWhen defeating an enemy inflicted with Frostbite, inflicts additional damage equivalent to 12.2% of Max HP on other enemies within a 2.5 m radius at a 30% chance."
      }
    },
    "name": "Polar Night"
  },
  "Venom Essence": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_SwampWalkerTier3_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Toxic Skill Power Boost Ratio",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.062"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Toxic Skill Power +6.2%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_SwampWalkerTier3_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_SwampWalker.SetOptionAbility_SwampWalker_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.Activate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Outgoing Shield Recovery Modifier",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.12"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [
            {
              "Tag": {
                "TagName": "Event.Receive"
              },
              "InvokeStatusEffect": {
                "StatusEffect": {
                  "RowName": "StatusEffect_ACCSet_SwampWalker",
                  "Table": null
                },
                "RemovalPolicy": "EM1AbilityCreatedObjectRemovalPolicy::RemoveWithThisAbility",
                "Params": []
              }
            }
          ],
          "SpawnAbilityActors": [],
          "Params": [
            {
              "Name": "WeaponType1",
              "Type": "EM1AbilityParamType::Enum",
              "Value": "WeaponTacticalRifle"
            },
            {
              "Name": "WeaponType2",
              "Type": "EM1AbilityParamType::Enum",
              "Value": "WeaponAssaultRifle"
            },
            {
              "Name": "InvokeSERatio",
              "Type": "EM1AbilityParamType::Float",
              "Value": "0.3"
            }
          ]
        },
        "descKey": "Tactical Rifle, Assault Rifle Firearm Attribute Effect Trigger Rate +12% For each Poison stack inflicted upon enemies, Firearm ATK +2%, Skill Power Modifier +0.7% for 5s at a 30% chance (up to 10 stacks, 5s duration)"
      }
    },
    "name": "Venom Essence"
  },
  "Bravery": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_ObstructorTier3_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Max Shield",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.118"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Max Shield +11.8%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_ObstructorTier3_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Obstructor.SetOptionAbility_Obstructor_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Skill Cost",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "-0.057"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": [
            {
              "Name": "CooltimeReduceType",
              "Type": "EM1AbilityParamType::Enum",
              "Value": "EM1ElementSelectType::Random"
            },
            {
              "Name": "CooltimeReduceRatio",
              "Type": "EM1AbilityParamType::Float",
              "Value": "0.2"
            },
            {
              "Name": "CooltimeReduceAmount",
              "Type": "EM1AbilityParamType::Float",
              "Value": "1"
            }
          ]
        },
        "descKey": "Skill Cost -5.7%\n20% chance to reduce a random skill's cooldown by 1s each time an enemy is defeated."
      }
    },
    "name": "Bravery"
  },
  "Frozen Heart": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_FrostWalkerTier3_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Non-Attribute Skill Power Boost Ratio",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.062"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Non-Attribute Skill Power +6.2%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_FrostWalkerTier3_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_FrostWalker.SetOptionAbility_FrostWalker_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Skill Cooldown",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "-0.047"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [
            {
              "Tag": {
                "TagName": "Event.Receive"
              },
              "InvokeStatusEffect": {
                "StatusEffect": {
                  "RowName": "StatusEffect_ACCSet_InFire",
                  "Table": null
                },
                "RemovalPolicy": "EM1AbilityCreatedObjectRemovalPolicy::RemoveWithThisAbility",
                "Params": []
              }
            }
          ],
          "SpawnAbilityActors": [],
          "Params": [
            {
              "Name": "AbilityCooltime",
              "Type": "EM1AbilityParamType::Float",
              "Value": "3"
            }
          ]
        },
        "descKey": "Skill Cooldown -4.7%\nOn acquiring Custom Resource, grants 1 stacks of Frozen Heart Energy (Up to 3 stacks, Cooldown 3s)\nFrozen Heart Energy: Max Shield +6.2% for 15s\nOn skill hit at 3 stacks of Frozen Heart Energy, inflicts Frozen Heart Essence on enemies\nFrozen Heart Essence:\nIncoming Damage Modifier +3% for 10s."
      }
    },
    "name": "Frozen Heart"
  },
  "Active Volcano": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_MoltenfortressTier3_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Fire Skill Power Boost Ratio",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.062"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Fire Skill Power +6.2%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_MoltenfortressTier3_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Moltenfortress.SetOptionAbility_Moltenfortress_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.Execute"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Firearm ATK",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.103"
                  }
                ],
                "QueryTags": []
              }
            },
            {
              "Tag": {
                "TagName": "Event.Execute2"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Firearm ATK",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.103"
                  }
                ],
                "QueryTags": []
              }
            },
            {
              "Tag": {
                "TagName": "Event.Execute3"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Firearm ATK",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.052"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [
            {
              "Tag": {
                "TagName": "Event.Receive"
              },
              "InvokeStatusEffect": {
                "StatusEffect": {
                  "RowName": "StatusEffect_ACCSet_SkillATKUP",
                  "Table": null
                },
                "RemovalPolicy": "EM1AbilityCreatedObjectRemovalPolicy::RemoveWithThisAbility",
                "Params": []
              }
            }
          ],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Handgun ATK+10.3%\nHand Cannon ATK +10.3%\nShotgun ATK +5.2%\nAfter reload, Skill Power +4.3% for 10s (Up to 3 stacks)"
      }
    },
    "name": "Active Volcano"
  },
  "Hungry Sonic": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_DeathStalkerTier3_01_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Skill Effect Range",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.072"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Skill Effect Range +7.2%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_DeathStalkerTier3_01_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_DeathStalker02.SetOptionAbility_DeathStalker02_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Tech Skill Modifier",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.041"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Dimension Skill Modifier",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.041"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [
            {
              "Tag": {
                "TagName": "Event.Activate"
              },
              "InvokeStatusEffect": {
                "StatusEffect": {
                  "RowName": "StatusEffect_ACCSet_DeathStalker02",
                  "Table": null
                },
                "RemovalPolicy": "EM1AbilityCreatedObjectRemovalPolicy::RemoveWithThisAbility",
                "Params": []
              }
            }
          ],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "When defeating an enemy, Skill Duration +2.7% (30s duration, up to 5 stacks)\nTech Skill Power Modifier +4.1%\nDimension Skill Power Modifier +4.1%"
      }
    },
    "name": "Hungry Sonic"
  },
  "Distorted Resolve": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_DeathStalkerTier3_00_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_DeathStalker00.SetOptionAbility_DeathStalker00_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.Activate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Firearm ATK",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "0.056"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": [
            {
              "Name": "WeaponType_00",
              "Type": "EM1AbilityParamType::Enum",
              "Value": "WeaponAssaultRifle"
            },
            {
              "Name": "WeaponType_01",
              "Type": "EM1AbilityParamType::Enum",
              "Value": "WeaponSubMachineGun"
            }
          ]
        },
        "descKey": "Assault Rifle ATK +5.6%\nSubmachine Gun ATK +5.6%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_DeathStalkerTier3_00_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_DeathStalker01.SetOptionAbility_DeathStalker01_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [
                  {
                    "Name": "RatioMaxValue",
                    "Type": "EM1AbilityParamType::Float",
                    "Value": "0.143"
                  },
                  {
                    "Name": "MaxValue",
                    "Type": "EM1AbilityParamType::Float",
                    "Value": "0.143"
                  }
                ],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Base Skill Power boost ratio",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "/Game/Blueprints/Gameplay/Common/Calculation/Value/DeathStalkerACCHpRatioValue.DeathStalkerACCHpRatioValue_C"
                  }
                ],
                "QueryTags": []
              }
            },
            {
              "Tag": {
                "TagName": "Event.Activate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "/Game/Blueprints/Gameplay/Common/Calculation/Recovery/CalcCommonRecovery.CalcCommonRecovery_C",
                  "SubPathString": ""
                },
                "Params": [
                  {
                    "Name": "RecoveryAmount",
                    "Type": "EM1AbilityParamType::Float",
                    "Value": "0.15"
                  },
                  {
                    "Name": "RecoveryType",
                    "Type": "EM1AbilityParamType::Enum",
                    "Value": "MaxRatio"
                  },
                  {
                    "Name": "RecoveryStatType",
                    "Type": "EM1AbilityParamType::Enum",
                    "Value": "Stat_CurrentEnergyShield"
                  }
                ],
                "Modifiers": [],
                "QueryTags": []
              }
            },
            {
              "Tag": {
                "TagName": "Event.Hit"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "/Game/Blueprints/Gameplay/Common/Calculation/Damage/CalcSkillDamagePC_New.CalcSkillDamagePC_New_C",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::SourceSnapshot",
                    "StatType": "Skill Power",
                    "ModOp": "EM1StatModifierOp::Multiply",
                    "Value": "-0.955"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [
            {
              "Tag": {
                "TagName": "Event.Activate"
              },
              "InvokeStatusEffect": {
                "StatusEffect": {
                  "RowName": "StatusEffect_ACCSet_DeathStalker00",
                  "Table": null
                },
                "RemovalPolicy": "EM1AbilityCreatedObjectRemovalPolicy::RemoveWithThisAbility",
                "Params": []
              }
            }
          ],
          "SpawnAbilityActors": [],
          "Params": [
            {
              "Name": "Ratio",
              "Type": "EM1AbilityParamType::Float",
              "Value": "1"
            },
            {
              "Name": "AbilityCooltime",
              "Type": "EM1AbilityParamType::Float",
              "Value": "15"
            },
            {
              "Name": "Stack",
              "Type": "EM1AbilityParamType::Int",
              "Value": "1"
            }
          ]
        },
        "descKey": "Increases Skill Power by up to +14.3% based on HP lost relative to Max HP\nWhen current HP is 1, Skill Power +14.3%\nHas a 100% chance to recover 15% Shield each time you inflict an enemy with a debuff\nOn Skill Attack, grants 1 stacks of Exaltation (Up to5 stacks, 15s duration)\nOn skill hit at 5 stacks of Exaltation, fires a guided projectile toward the closest target (Cooldown 7s)\nDeals additional damage equivalent to 4.5% of Skill Power, and inflicts Desolation\nDesolation: All ATK of the target -0.5% (Up to 5 stacks, for 30s)"
      }
    },
    "name": "Distorted Resolve"
  },
  "Hunter": {
    "bonusReferences": {
      "0": null,
      "2": {
        "abilityKey": {
          "Name": "SetOptionAbility_EtherealArkTier3_Parts2",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Base.SetOptionAbility_Base_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "Skill Cooldown",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "-0.04"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [],
          "SpawnAbilityActors": [],
          "Params": []
        },
        "descKey": "Skill Cooldown -4%"
      },
      "4": {
        "abilityKey": {
          "Name": "SetOptionAbility_EtherealArkTier3_Parts4",
          "AbilityClass": {
            "AssetPathName": "/Game/Blueprints/Equipment/SetOption/SetOptionAbility_Ark.SetOptionAbility_Ark_C",
            "SubPathString": ""
          },
          "Operations": [
            {
              "Tag": {
                "TagName": "Event.DuringActivate"
              },
              "Operation": {
                "CalcClass": {
                  "AssetPathName": "",
                  "SubPathString": ""
                },
                "Params": [],
                "Modifiers": [
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "MP Recovery In Combat",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "0.12"
                  },
                  {
                    "StatRefType": "EM1StatRefType::None",
                    "StatType": "MP Recovery Out of Combat",
                    "ModOp": "EM1StatModifierOp::Add",
                    "Value": "1.03"
                  }
                ],
                "QueryTags": []
              }
            }
          ],
          "InvokeStatusEffects": [
            {
              "Tag": {
                "TagName": "Event.Execute"
              },
              "InvokeStatusEffect": {
                "StatusEffect": {
                  "RowName": "StatusEffect_ACCSet_Ark00",
                  "Table": null
                },
                "RemovalPolicy": "EM1AbilityCreatedObjectRemovalPolicy::RemoveWithThisAbility",
                "Params": []
              }
            },
            {
              "Tag": {
                "TagName": "Event.Execute2"
              },
              "InvokeStatusEffect": {
                "StatusEffect": {
                  "RowName": "StatusEffect_ACCSet_Ark01",
                  "Table": null
                },
                "RemovalPolicy": "EM1AbilityCreatedObjectRemovalPolicy::RemoveWithThisAbility",
                "Params": []
              }
            }
          ],
          "SpawnAbilityActors": [],
          "Params": [
            {
              "Name": "CurrentMpRatio",
              "Type": "EM1AbilityParamType::Float",
              "Value": "0.5"
            }
          ]
        },
        "descKey": "MP Recovery In Combat +0.12\nMP Recovery Out of Combat +1.03\nWhen current MP is at 50% or below, gains Arche Shield (Cooldown 5s)\nWhile Arche Shield is active, Firearm ATK -12%\nWhen hit, removes Arche Shield and recovers MP by 30%"
      }
    },
    "name": "Hunter"
  }
}