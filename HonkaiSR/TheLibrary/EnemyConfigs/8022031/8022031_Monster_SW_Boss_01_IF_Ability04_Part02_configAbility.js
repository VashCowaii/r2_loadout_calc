const configAbility = {
  "fileName": "8022031_Monster_SW_Boss_01_IF_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
      "counter": {
        "operator": "Variables[0] (UnusedUnderThisBase_177) || RETURN",
        "displayLines": "UnusedUnderThisBase_177",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_177"
        ]
      },
      "valuePerStack": {
        "MDF_DamageReduce": {
          "operator": "Variables[0] (UnusedUnderThisBase_176) || RETURN",
          "displayLines": "UnusedUnderThisBase_176",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_176"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}