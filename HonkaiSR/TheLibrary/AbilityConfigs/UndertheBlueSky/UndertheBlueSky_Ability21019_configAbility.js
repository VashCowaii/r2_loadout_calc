const configAbility = {
  "fileName": "UndertheBlueSky_Ability21019",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_21019_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21019_Sub[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.12) || RETURN",
                "displayLines": "0.12",
                "constants": [],
                "variables": [
                  0.12
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT Rate +<span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalChance</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "CRIT Rate Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21019_Main",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "LC_21019_Sub[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
              "duration": {
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
  "desc": "Increases the wearer's ATK by #1[i]%. When the wearer defeats an enemy, the wearer's CRIT Rate increases by #2[i]% for #3[i] turn(s).",
  "params": [
    [
      0.16,
      0.12,
      3
    ],
    [
      0.2,
      0.15,
      3
    ],
    [
      0.24,
      0.18,
      3
    ],
    [
      0.28,
      0.21,
      3
    ],
    [
      0.32,
      0.24,
      3
    ]
  ]
}