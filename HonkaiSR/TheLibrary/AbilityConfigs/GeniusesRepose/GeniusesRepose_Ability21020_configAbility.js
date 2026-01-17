const configAbility = {
  "fileName": "GeniusesRepose_Ability21020",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "LC_21020_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21020_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.24) || RETURN",
                "displayLines": "0.24",
                "constants": [],
                "variables": [
                  0.24
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT DMG +<span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalDamage</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "CRIT DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21020_Main",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "LC_21020_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
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
  "desc": "Increases the wearer's ATK by #1[i]%. When the wearer defeats an enemy, the wearer's CRIT DMG increases by #2[i]% for #3[i] turn(s).",
  "params": [
    [
      0.16,
      0.24,
      3
    ],
    [
      0.2,
      0.3,
      3
    ],
    [
      0.24,
      0.36,
      3
    ],
    [
      0.28,
      0.42,
      3
    ],
    [
      0.32,
      0.48,
      3
    ]
  ]
}