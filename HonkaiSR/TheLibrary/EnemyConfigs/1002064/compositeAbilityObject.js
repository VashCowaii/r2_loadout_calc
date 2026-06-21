const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 1002064,
  "trimCharacterName": 1002064,
  "abilityList": [
    "1002064_Modifiers",
    "1002064_Monster_W1_CocoliaP2_01_PassiveAbilityInitiate",
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01"
  ],
  "abilityObject": {
    "1002064_Modifiers": {
      "fileName": "1002064_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1494181192\">Enemy_W1_CocoliaP2_01_DieWithoutEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase2"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1663784958\">Enemy_W1_CocoliaP2_01_BeHitEffect</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-258262082\">Enemy_W1_CocoliaP2_01_SpinSpeedController</a>",
          "execute": [
            {
              "eventTrigger": "Being Limbo [Owner]"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1454706041\">Enemy_W1_CocoliaP2_01_StandByEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        }
      ],
      "references": []
    },
    "1002064_Monster_W1_CocoliaP2_01_PassiveAbilityInitiate": {
      "fileName": "1002064_Monster_W1_CocoliaP2_01_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1454706041\">Enemy_W1_CocoliaP2_01_StandByEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-258262082\">Enemy_W1_CocoliaP2_01_SpinSpeedController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1663784958\">Enemy_W1_CocoliaP2_01_BeHitEffect</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02": {
      "fileName": "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01": {
      "fileName": "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
      "childAbilityList": [
        "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
        "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
        "1002064_Monster_Boss_Cocolia_P1_Weapon_Ability04_Camera"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    }
  }
}