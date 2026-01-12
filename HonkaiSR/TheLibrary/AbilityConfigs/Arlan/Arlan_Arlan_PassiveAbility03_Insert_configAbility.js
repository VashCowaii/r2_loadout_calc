const configAbility = {
  "fileName": "Arlan_Arlan_PassiveAbility03_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": "Caster",
      "variableName": "Arlan_MaxHPValue",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Set HP Value",
      "target": "Caster",
      "setValue": {
        "operator": "Variables[0] (Arlan_MaxHPValue) || Variables[1] (0.25) || MUL || RETURN",
        "displayLines": "(Arlan_MaxHPValue * 0.25)",
        "constants": [],
        "variables": [
          "Arlan_MaxHPValue",
          0.25
        ]
      }
    },
    {
      "name": "Define Modifier Variable",
      "modifierName": "Arlan_PassiveAbility_UnDead[<span class=\"descriptionNumberColor\">Turn the Tables</span>]",
      "function": "Add"
    },
    {
      "name": "Declare Custom Variable",
      "target": "Owner of this Modifier",
      "scope": "TargetEntity",
      "variableName": "_Arlan_00_PassiveSkill03_InsertController"
    }
  ],
  "references": []
}