const configAbility = {
  "fileName": "8015012_Monster_AML_Boss_IF_AbilityP02",
  "childAbilityList": [
    "8015012_Monster_AML_Boss_IF_AbilityP02"
  ],
  "skillTrigger": "SkillP02",
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
      "modifier": "<a class=\"gModGreen\" id=\"1744952962\">Enemy_AML_Boss_IF_Unselectable</a>[<span class=\"descriptionNumberColor\">Vestige Valor</span>]"
    },
    {
      "name": "Assign Unique Name",
      "uniqueName": "AML_Boss_00",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1146217540\">Enemy_AML_Boss_IF_PassiveAbilityInitiate_ChangePhaseController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"255719361\">Enemy_AML_Boss_IF_ListenAllPartLimbo</a>"
    }
  ],
  "references": []
}