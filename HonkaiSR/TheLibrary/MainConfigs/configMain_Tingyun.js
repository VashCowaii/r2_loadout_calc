let configMain = {
  "$type": "RPG.GameCore.CharacterConfig",
  "SomatoType": "MiddleAvatar",
  "SaveModelWhenDead": true,
  "SkillList": [
    {
      "Name": "Skill01",
      "UseType": "SelectEntity",
      "TargetInfo": {
        "TargetType": "EnemySelect"
      },
      "UseReadyTransitAnim": true,
      "ReadyAnimState": "Skill01_Ready",
      "ReadyAnimWaitTime": 0.3,
      "CameraConfig": {
        "NormalConfig": {
          "CameraState": "UseSkillPerform",
          "IsLocalOffset": true,
          "AnchorOffset": {
            "X": 0,
            "Y": 1.5,
            "Z": 0.2
          },
          "AimOffset": {
            "X": 0,
            "Y": 1.5,
            "Z": 0
          }
        },
        "BlendConfig": {
          "BlendType": "Cut"
        }
      },
      "CameraConfigAdded": {
        "NormalConfig": {
          "CameraState": "SelectDarkTeamEntity",
          "IsLocalOffset": true,
          "AnchorOffset": {
            "X": 0.1,
            "Y": 0.12,
            "Z": -0.25
          },
          "AimOffset": {
            "X": -2.8,
            "Y": 0.45,
            "Z": 0
          },
          "FollowRadius": 2.65,
          "AnchorToAimAngle": 23
        },
        "BlendConfig": {
          "BlendType": "Custom",
          "CustomCurveName": "BlendCut_05to1",
          "BlendTime": 1
        }
      },
      "FormationType": "LightTeamSelectTarget",
      "EntryAbility": "Avatar_TingYun_Skill01_Phase01",
      "ComplexSkillAIPreCheck": {
        "Groups": [
          {
            "GroupName": "DefaultNormalSkill_PreCheck"
          },
          {
            "GroupName": "BaseWeight",
            "Weight": {
              "Value": 0.3
            }
          },
          {
            "GroupName": "BasePp_Common_SingleAttack",
            "Weight": {
              "Value": 0.7
            }
          }
        ]
      },
      "ComplexSkillAI": {
        "Groups": [
          {
            "GroupName": "DefaultNormalSkill"
          },
          {
            "GroupName": "BaseWeight",
            "Weight": {
              "Value": 0.3
            }
          },
          {
            "GroupName": "BasePp_Common_SingleAttack",
            "Weight": {
              "Value": 0.7
            }
          }
        ]
      }
    },
    {
      "Name": "Skill02",
      "SkillType": "Skill",
      "UseType": "SelectEntity",
      "AlwaysDoAutoLock": true,
      "AutoLockType": "HighWP_DamageCarry",
      "TargetInfo": {
        "TargetType": "FriendSelect"
      },
      "UseReadyTransitAnim": true,
      "ReadyAnimState": "Skill02_Ready_Loop",
      "ReadyAnimWaitTime": 0.3,
      "CameraConfig": {
        "NormalConfig": {
          "CameraState": "SelectLightTeamEntity",
          "AnchorOffset": {
            "X": 0,
            "Y": 1,
            "Z": 0.5
          },
          "FollowDamp": 0.65,
          "NeedCutBlending": true
        },
        "CloseupShotConfig": {},
        "ShowEntityConfig": {
          "ShowTargetType": {
            "$type": "RPG.GameCore.TargetAlias",
            "Alias": "AllTeamMember"
          },
          "IsAliveOnly": false
        }
      },
      "FormationType": "LightTeamNormal",
      "TeamFormationConfigTemplateName": "LowSpacing",
      "EntryAbility": "Avatar_TingYun_Skill02_Phase01",
      "ComplexSkillAIPreCheck": {
        "Groups": [
          {
            "GroupName": "DefaultBPSkill_PreCheck"
          },
          {
            "GroupName": "AddNP_Common_BPSkill",
            "Weight": {
              "Value": 0.1
            }
          },
          {
            "GroupName": "Base_Tingyun_CompareDPT",
            "Weight": {
              "Value": 0.9
            }
          },
          {
            "GroupName": "Add10_TingYun_BuffBPSkill",
            "Weight": {
              "Value": 0.01
            }
          }
        ]
      },
      "ComplexSkillAI": {
        "Groups": [
          {
            "GroupName": "DefaultBPSkill"
          },
          {
            "GroupName": "AddNP_Common_BPSkill",
            "Weight": {
              "Value": 0.1
            }
          },
          {
            "GroupName": "Base_Tingyun_CompareDPT",
            "Weight": {
              "Value": 0.9
            }
          },
          {
            "GroupName": "Add10_TingYun_BuffBPSkill",
            "Weight": {
              "Value": 0.01
            }
          }
        ]
      }
    },
    {
      "Name": "Skill03",
      "SkillType": "Ultra",
      "UseType": "SelectEntity",
      "AlwaysDoAutoLock": true,
      "AutoLockType": "HighSPNotFull",
      "TargetInfo": {
        "TargetType": "FriendSelect"
      },
      "SkillNameHUD": false,
      "ReadyAnimState": "Skill03_Ready",
      "FormationType": "LightTeamNormal",
      "TeamFormationConfigTemplateName": "LowSpacing",
      "EntryAbility": "Avatar_TingYun_Skill03_Phase01",
      "PrepareAbility": "Avatar_TingYun_Skill03_EnterReady",
      "ComplexSkillAIPreCheck": {
        "Groups": [
          {
            "GroupName": "Ultra_Tingyun_RemoveFullSP"
          },
          {
            "GroupName": "Ultra_Tingyun_RemoveSelf"
          },
          {
            "GroupName": "Ultra_Common_ImmediateRelease"
          },
          {
            "GroupName": "Base_Common_BaseTypeFactor"
          },
          {
            "GroupName": "Ultra_Tingyun_CheckDamageCarry"
          }
        ]
      },
      "ComplexSkillAI": {
        "SkillBasicPower": {
          "Value": 60
        },
        "Groups": [
          {
            "GroupName": "DefaultUltra"
          },
          {
            "GroupName": "Ultra_Tingyun_RemoveSelf"
          },
          {
            "GroupName": "Ultra_Common_ImmediateRelease"
          },
          {
            "GroupName": "Base_Common_BaseTypeFactor"
          },
          {
            "GroupName": "Base_Tingyun_CheckNeedCharge"
          }
        ]
      },
      "AIUltraSkillPriority": "AddSP"
    },
    {
      "Name": "SkillP01",
      "UseType": "Passive",
      "TargetInfo": {
        "TargetType": "Caster"
      },
      "EntryAbility": "Avatar_TingYun_PassiveSkill01"
    },
    {
      "Name": "SkillMaze",
      "SkillType": "Maze",
      "TargetInfo": {
        "TargetType": "Caster"
      },
      "EntryAbility": "Avatar_TingYun_00_SkillMazeInLevel"
    },
    {
      "Name": "PassiveSkill02",
      "UseType": "Passive",
      "TargetInfo": {
        "TargetType": "Caster"
      },
      "EntryAbility": "Avatar_Common_PassiveSkill"
    }
  ],
  "AbilityList": [
    "Avatar_Common_PassiveSkill"
  ],
  "SkillAbilityList": [
    {
      "Skill": "Skill01",
      "AbilityList": [
        "Avatar_Tingyun_Skill01_Camera",
        "Avatar_TingYun_Skill01_Phase01",
        "Avatar_TingYun_Skill01_Phase02"
      ]
    },
    {
      "Skill": "Skill02",
      "AbilityList": [
        "Avatar_Tingyun_Skill02_Camera_Self",
        "Avatar_TingYun_Skill02_Phase01",
        "Avatar_TingYun_Skill02_Phase02",
        "Avatar_Tingyun_Skill02_Camera_Others"
      ]
    },
    {
      "Skill": "Skill03",
      "AbilityList": [
        "Avatar_TingYun_Skill03_EnterReady",
        "Avatar_Tingyun_00_Skill03_Camera",
        "Avatar_TingYun_Skill03_Phase01",
        "Avatar_TingYun_Skill03_Phase02"
      ]
    },
    {
      "Skill": "SkillP01",
      "AbilityList": [
        "Avatar_TingYun_PassiveSkill01"
      ]
    }
  ],
  "DynamicValues": {
    "Floats": {
      "242053466": 2,
      "376156435": 0.2,
      "537824780": "charVar_0",
      "625640552": "charVar_1",
      "645810140": 0.25,
      "784892657": "charVar_2",
      "1105114375": "charVar_3",
      "1246667513": 0.6,
      "1521339462": "charVar_4",
      "1621744260": 0.5,
      "1935276870": "charVar_5",
      "1953698797": 0.4,
      "-19417079": "charVar_6",
      "-1581832284": "charVar_7",
      "-1126825319": 1,
      "-1847083384": 0.4,
      "-1829192421": 0.5,
      "-1019407308": 3,
      "-1349665456": 50,
      "-616190875": "charVar_8",
      "-2102294272": "charVar_9",
      "-1958874189": 0.2,
      "-1919300542": 5,
      "-815613313": 0.2,
      "-1008919655": "charVar_10",
      "-1752447704": 10,
      "-404659623": 5
    }
  },
  "WeaponType": "WP_Magic",
  "DisableAnimEventLayers": [
    "Riboon Layer"
  ],
  "characterName": "Tingyun",
  "abilityConfig": "C:/Users/kanoo/Desktop/DimbreathMaster/turnbasedgamedata/Config/ConfigAbility/Avatar/Avatar_Tingyun_00_Ability.json"
}