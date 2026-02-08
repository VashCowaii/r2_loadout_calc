const compositeAbilityObject = {
  "fullCharacterName": 1002060,
  "trimCharacterName": 1002060,
  "abilityList": [
    "1002060_Monster_W1_CocoliaP2_01_Ability01_Part02",
    "1002060_Monster_W1_CocoliaP2_01_Ability01_Part01",
    "1002060_Monster_W1_CocoliaP2_01_PassiveAbilityInitiate",
    "1002060_Modifiers"
  ],
  "abilityObject": {
    "1002060_Monster_W1_CocoliaP2_01_Ability01_Part02": {
      "fileName": "1002060_Monster_W1_CocoliaP2_01_Ability01_Part02",
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
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
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
      "references": []
    },
    "1002060_Monster_W1_CocoliaP2_01_Ability01_Part01": {
      "fileName": "1002060_Monster_W1_CocoliaP2_01_Ability01_Part01",
      "childAbilityList": [
        "1002060_Monster_W1_CocoliaP2_01_Ability01_Part01",
        "1002060_Monster_W1_CocoliaP2_01_Ability01_Part02",
        "1002060_Monster_W1_CocoliaP2_01_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
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
          "ability": "Monster_W1_CocoliaP2_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1002060_Monster_W1_CocoliaP2_01_PassiveAbilityInitiate": {
      "fileName": "1002060_Monster_W1_CocoliaP2_01_PassiveAbilityInitiate",
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
      "references": []
    },
    "1002060_Modifiers": {
      "fileName": "1002060_Modifiers",
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-258262082\">Enemy_W1_CocoliaP2_01_SpinSpeedController</a>",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1454706041\">Enemy_W1_CocoliaP2_01_StandByEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}