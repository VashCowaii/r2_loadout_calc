const configAbility = {
  "fileName": "LittleIca_Servant_HyacineServant_PassiveAbility",
  "childAbilityList": [
    "LittleIca_Servant_HyacineServant_PassiveAbility"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_HyacineServant_Passive"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_HyacineServant_ChallangeScore"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_HyacineServant_LoseHpPassive"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6,
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_HyacineServant_Eidolon6_PenetrateRatio_Halo",
          "valuePerStack": {
            "MDF_PenetrateRatio": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            }
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Memosprite_HyacineServant_LoseHpPassive",
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
          },
          "modifier": "Memosprite_HyacineServant_LoseHpSet",
          "haloStatus": true
        }
      ]
    }
  ]
}