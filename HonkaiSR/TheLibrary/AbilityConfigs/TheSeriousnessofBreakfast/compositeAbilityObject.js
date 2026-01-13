const compositeAbilityObject = {
  "fullCharacterName": "The Seriousness of Breakfast",
  "trimCharacterName": "TheSeriousnessofBreakfast",
  "abilityList": [
    "TheSeriousnessofBreakfast_Ability21027"
  ],
  "fixedStats": {
    "1": {
      "DamageAll": 0.12
    },
    "2": {
      "DamageAll": 0.15
    },
    "3": {
      "DamageAll": 0.18
    },
    "4": {
      "DamageAll": 0.21
    },
    "5": {
      "DamageAll": 0.24
    }
  },
  "abilityObject": {
    "TheSeriousnessofBreakfast_Ability21027": {
      "fileName": "TheSeriousnessofBreakfast_Ability21027",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21027_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21027_Sub[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.04) || Variables[1] (_Layer) || MUL || RETURN",
                    "displayLines": "(0.04 * _Layer)",
                    "constants": [],
                    "variables": [
                      0.04,
                      "_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">#SkillEquip_P2_AttackAddedRatio</span>, up to <span class=\"descriptionNumberColor\">#SkillEquip_P3_MaxLayer</span> stack(s).",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21027_Main",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "LC_21027_Sub[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's DMG by #1[i]%. For every enemy defeated by the wearer, the wearer's ATK increases by #2[i]%, stacking up to #3[i] time(s).",
      "params": [
        [
          0.12,
          0.04,
          3
        ],
        [
          0.15,
          0.05,
          3
        ],
        [
          0.18,
          0.06,
          3
        ],
        [
          0.21,
          0.07,
          3
        ],
        [
          0.24,
          0.08,
          3
        ]
      ]
    }
  },
  "isLightcone": true
}