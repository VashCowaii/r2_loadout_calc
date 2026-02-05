const configAbility = {
  "fileName": "4012077_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part02",
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
      "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Controller",
      "valuePerStack": {
        "MDF_NegativeBlood_Target_DeathCountDown": {
          "operator": "Variables[0] (UnusedUnderThisBase_103) || RETURN",
          "displayLines": "UnusedUnderThisBase_103",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_103"
          ]
        },
        "MDF_NegativeBlood_Target_FatigueRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_104) || RETURN",
          "displayLines": "UnusedUnderThisBase_104",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_104"
          ]
        },
        "MDF_NegativeBlood_Target_StanceBreakDownRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_105) || RETURN",
          "displayLines": "UnusedUnderThisBase_105",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_105"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Enemy_W4_PolluxPart_IF_Reflex[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]",
      "valuePerStack": {
        "MDF_ReflexDamageValue": {
          "operator": "Variables[0] (UnusedUnderThisBase_102) || RETURN",
          "displayLines": "UnusedUnderThisBase_102",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_102"
          ]
        }
      }
    }
  ],
  "references": []
}